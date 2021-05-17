const Discord = require("discord.js");
const nodemon = require("nodemon");
const chalk = require("chalk");
require("dotenv").config();
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  ws: { properties: { $browser: "Discord iOS" } },
});
const { token } = require("./config.js");
const fs = require("fs");

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

["command.handler", "event.handler", "feature-handler"].forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
});

client.login(process.env.TOKEN);
