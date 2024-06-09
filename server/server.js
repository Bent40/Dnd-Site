const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("express-ws")(app);

require("dotenv/config");

app.use(express.json());

const users = require("./logic/routes/user");
const campaign = require("./logic/routes/campaign");
app.use("/api/users", users);
app.use("/api/campaigns", campaign);

app.use(express.static(__dirname + "/files"));

mongoose.set('strictQuery', false);

mongoose.connect(process.env.DB, () => {
  console.log("Monsters Spawned");
});

app.listen(process.env.PORT, () => {
  console.log("Dungeon Activated");
});
