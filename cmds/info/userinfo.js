const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "userinfo",
  aliases: ["ui"],
  description: "get info!",
  async execute(message, args, Discord, client) {
    const userTarget = message.mentions.users.first() || message.author;
    const memberTarget = message.guild.members.cache.get(userTarget.id);

    let isBot;
    if (userTarget.bot) isBot = "tak";
    else isBot = "nie";

    const embed = new MessageEmbed()
      .setColor("RED")
      .setAuthor(
        `Informacje o użytkowniku ${userTarget.username}`,
        userTarget.displayAvatarURL({ dynamic: true })
      )
      .addFields(
        {
          name: "Tag oraz ID: ",
          value: `${userTarget.tag} | ${userTarget.id}`,
        },
        { name: "Czy jest botem: ", value: isBot },
        {
          name: "Nickname użytkownika: ",
          value: memberTarget.nickname || "Nie istnieje.",
        },
        {
          name: "Dołączył do serwera: ",
          value: new Date(memberTarget.joinedTimestamp).toLocaleDateString(),
        },
        {
          name: "Założył konto: ",
          value: new Date(userTarget.createdTimestamp).toLocaleDateString(),
        },
        {
          name: "Ilość posiadanych ról: ",
          value: memberTarget.roles.cache.size - 1,
        }
      );

    message.channel.send(embed);
  },
};
