const mongoose = require("mongoose");

const warnSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  guildID: { type: String, required: true },
  warnings: { type: [Object] },
});

module.exports = mongoose.model("warnSchema", warnSchema);
