const db = require("../db/user");
const Login = async (req, res) => {
  await db.login(req.body).then((data) => {
    res.json(data);
  });
};

module.exports = {
  Login,
};
