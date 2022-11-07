const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

app.use(express.json());

const users = require("./routes/user");
app.use("/api/users", users);

mongoose.connect(process.env.DB, () => {
  console.log("Monsters Spawned");
});

app.listen(process.env.PORT, () => {
  console.log("Dungeon Activated");
});
