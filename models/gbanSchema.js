const mongoose = require("mongoose");

const gbanSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  moderatorID: { type: String, required: true },
  reason: { type: String, required: true },
  date: { type: String, required: true },
});

module.exports = mongoose.model("gbanSchema", gbanSchema);
