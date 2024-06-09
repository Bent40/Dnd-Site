const mongoose = require("mongoose");

module.exports = mongoose.model(
  "campaign",
  mongoose.Schema({
    displayName:String,
    maps: Array,
    users: Object,
  })
);
