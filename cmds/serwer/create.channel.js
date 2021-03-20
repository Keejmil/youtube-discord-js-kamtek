module.exports = {
  name: "create-channel",
  aliases: [],
  description: "create a channel!",
  execute(message, args, Discord, client) {
    //   message.guild.channels.create("Kanał", {
    //       type: "text",
    //   })

    const channel = message.guild.channels.cache.get('822408999420428348');

    channel.setParent('821462970071777311');
  }
};
