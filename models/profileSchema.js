const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String, required: true, unique: true },
  guildID: { type: String, required: true },
  coins: { type: Number, default: 1000 },
  bank: { type: Number, default: 0 },
});

module.exports = mongoose.model("profileSchema", profileSchema);
