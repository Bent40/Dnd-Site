const db = require("../../mongo/DBActions");
const model = require("../../mongo/models/user");

const Login = async (req, res) => {
  await db.getOne(model, req.query).then((data) => {
    if (data) {
      res
        .status(200)
        .json({ user: { username: data.username, role: data.role } });
    } else res.status(400).json({ err: "no user found" });
  });
};

const register = async (req, res) => {
  await db.postOne(model, req.body).then((data) => {
    res.json(data);
  });
};

module.exports = {
  Login,
  register,
};
