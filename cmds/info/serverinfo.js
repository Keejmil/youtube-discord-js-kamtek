const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "serverinfo",
  aliases: ["si"],
  description: "get info!",
  async execute(message, args, Discord, client) {
    const { guild } = message;

    const { owner, memberCount, createdAt } = guild;

    const embed = new MessageEmbed()
      .setAuthor(`Informacje o serwerze ${guild.name}`)
      .setThumbnail(guild.iconURL())
      .addFields(
        {
          name: "Ilość członków: ",
          value: memberCount,
        },
        {
          name: "Właściciel: ",
          value: owner.id,
        },
        {
          name: "Data utworzenia serwera: ",
          value: new Date(createdAt).toLocaleDateString(),
        },
        {
          name: "Ilość ról: ",
          value: guild.roles.cache.size - 1,
        },
        {
          name: "Ilośc kanałów: ",
          value: guild.channels.cache.size,
        },
        {
          name: "Ilość emotek: ",
          value: guild.emojis.cache.size,
        }
      );

    message.channel.send(embed);
  },
};
