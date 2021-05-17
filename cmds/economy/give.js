const { MessageEmbed } = require("discord.js");
const profileSchema = require("../../models/profileSchema");

module.exports = {
  name: "give",
  aliases: [],
  description: "give coins!",
  async execute(message, args, Discord, client) {
    const userTarget = message.mentions.users.first();
    if (!userTarget) {
      const embed = new MessageEmbed()
        .setColor("RED")
        .setTitle("Error!")
        .setDescription("Nie oznaczyłeś użytkownika!")
        .setFooter(
          `Komenda wywołana dla ${message.author.username}`,
          message.author.displayAvatarURL()
        );
      message.channel.send(embed);
      return;
    }

    const amount = args[1];
    if (!amount || isNaN(amount) || amount % 1 != 0 || amount <= 0) {
      const embed = new MessageEmbed()
        .setColor("RED")
        .setTitle("Error!")
        .setDescription("Nie podałeś prawidłowej cyfry!")
        .setFooter(
          `Komenda wywołana dla ${message.author.username}`,
          message.author.displayAvatarURL()
        );

      message.channel.send(embed);
      return;
    }

    await profileSchema.findOneAndUpdate(
      {
        userID: userTarget.id,
        guildID: message.guild.id,
      },
      {
        $inc: {
          coins: amount,
        },
      },
      {
        upsert: true,
      }
    );

    message.channel.send(
      `Pomyślnie dodano \`${amount}\` do portfela ${userTarget}`
    );
  },
};
