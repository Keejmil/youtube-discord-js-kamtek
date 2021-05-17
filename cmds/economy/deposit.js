const { MessageEmbed } = require("discord.js");
const profileSchema = require("../../models/profileSchema");

module.exports = {
  name: "deposit",
  aliases: ["dep"],
  description: "deposit coins!",
  async execute(message, args, Discord, client) {
    const amount = args[0];
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

    const profileData = await profileSchema.findOne({
      userID: message.author.id,
      guildID: message.guild.id,
    });
    if (!profileData) {
      const embed = new MessageEmbed()
        .setColor("RED")
        .setTitle("Error!")
        .setDescription("Nie jestes zarejestrowany w bazie danych!")
        .setFooter(
          `Komenda wywołana dla ${message.author.username}`,
          message.author.displayAvatarURL()
        );

      message.channel.send(embed);
      return;
    }

    if (amount > profileData.coins) {
      const embed = new MessageEmbed()
        .setColor("RED")
        .setTitle("Error!")
        .setDescription("Nie masz tyle środków na koncie!")
        .setFooter(
          `Komenda wywołana dla ${message.author.username}`,
          message.author.displayAvatarURL()
        );

      message.channel.send(embed);
      return;
    }

    await profileSchema.findOneAndUpdate(
      {
        userID: message.author.id,
        guildID: message.guild.id,
      },
      {
        $inc: {
          coins: -amount,
          bank: amount,
        },
      }
    );

    const embed = new MessageEmbed()
      .setColor("GREEN")
      .setTitle("Udana operacja!")
      .setDescription(`Pomyślnie przelano \`${amount}\` do twojego banku.`)
      .setFooter(
        `Komenda wywołana dla ${message.author.username}`,
        message.author.displayAvatarURL()
      );

    message.channel.send(embed);
  },
};
