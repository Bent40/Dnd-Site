const model = require("../models/user");

const login = async (req) => {
  return await model.findOne({ username: req.username }).then(async (data) => {
    if (data)
      return await model
        .findOne({ username: req.username, password: req.password })
        .then((data) => {
          if (data) return { ans: "" };
          else return { ans: "Password Incorrect" };
        });
    else return { ans: "User Not Found" };
  });
};

module.exports = {
  login,
};
