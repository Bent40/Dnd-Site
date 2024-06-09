const db = require("../../mongo/DBActions");
const model = require("../../mongo/models/campaign");

const findCampaign = async (req, res) => {
  await db.getOne(model, req.query).then((data) => {
    if (data) res.status(200).json({ campaign: { ...data._doc } });
    else res.status(500).json({ err: "no campaign was found" });
  });
};

const getAllCampaigns = async (req, res) => {
  console.log(req.query);
  await db
    .get(model, {
      $or: [
        { "users.dm": req.query.user },
        { [`users.players.${req.query.user}`]: { $exists: true } },
      ],
    })
    .then((data) => {
      console.log(data);
      if (data) res.status(200).json({ campaigns: [...data] });
      else res.status(500).json({ err: "no campaign was found" });
    });
};

const updateChar = async (req, res) => {
  await db.patchOne(model, req.query, { ...req.body }).then((data) => {
    if (data) res.status(200).json({ campaign: { ...data._doc } });
    else res.status(500).json({ err: "no campaign was found" });
  });
};

const campaignHandler = (ws, req) => {
  let interval = -1;
  let prev = {};
  ws.on("message", (msg) => {
    switch (msg) {
      case "close":
        clearInterval(interval);
        break;
      default:
        interval = setInterval(async () => {
          await db.getOne(model, { _id: req.query._id }).then(async (data) => {
            let campaign = { ...data._doc };
            if (JSON.stringify(campaign) !== JSON.stringify(prev)) {
              prev = JSON.parse(JSON.stringify(campaign));
              ws.send(JSON.stringify(campaign));
            }
          });
        }, 500);
    }
  });
};

module.exports = {
  findCampaign,
  getAllCampaigns,
  updateChar,
  campaignHandler,
};
