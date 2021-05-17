const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "embed",
  aliases: [],
  description: "create an embed!",
  async execute(message, args, Discord, client) {
    const embedChannel = message.mentions.channels.first();
    if (!embedChannel) {
      message.channel.send("Nie oznaczyłeś kanału!");
      return;
    }

    const content = args.slice(1).join(" ");

    // Opcje embeda;
    let embedColor = content.split("|")[0];
    if (!embedColor) {
      message.channel.send("Nie podałeś koloru embeda.");
      return;
    }

    let embedTitle = content.split("|")[1];
    if (!embedTitle) {
      message.channel.send("Nie podałes tytułu embeda");
      return;
    }

    let embedDescription = content.split("|")[2];
    if (!embedDescription) {
      message.channel.send("Nie podałeś treści embeda.");
      return;
    }

    // Finalne tworzenie embeda;
    let embed = new MessageEmbed()
      .setColor(embedColor)
      .setTitle(embedTitle)
      .setDescription(embedDescription)
      .setFooter(
        `${message.author.tag} | ${message.author.id}`,
        message.author.displayAvatarURL({ dynamic: true })
      );

    embedChannel.send(embed);
  },
};

// !embed <wzmianka kanału> kolorWHexach|to jest tytuł|to jst opis
