const fetch = require("node-fetch");

module.exports = {
  name: "shiba",
  aliases: ["shibe"],
  description: "random shibe image!",
  async execute(message, args, Discord, client) {
    let res = await fetch(
      "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true"
    );
    let img = (await res.json())[0];
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Woof!")
      .setImage(img);
    message.channel.send(embed);
  },
};
