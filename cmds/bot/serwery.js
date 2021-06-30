module.exports = {
  name: "serwery",
  aliases: [],
  description: "pokaż serwery na których jest bot!",
  async execute(message, args, Discord, client) {
    let guilds = [];

    client.guilds.cache.forEach((guild) => {
      guilds.push(
        `${guild.name}        ${guild.id}        ${guild.memberCount}\n`
      );
    });

    message.channel.send(guilds, { split: true });
  },
};
