/* 
    Discord.JS "user-info" command.
    100% based on Discord.JS documentation
    Free to use (MIT License)

    READ COMMENTS!
*/

// exporting an empty object;
module.exports = {
  // giving it a name, alias and descripion;
  name: "userinfo",
  aliases: ["user-info"],
  description: "view info about user!",
  // async executing all the parameters (EVEN ORDER MATTERS!);
  async execute(message, args, Discord, client, cmd) {
    // Firstly, we're getting the mentioned user to the variable (or we're getting the message author if there's not);
    const userTarget = message.mentions.users.first || message.author;

    // Secondly, we need to change this
    const memberTarget = message.guild.members.cache.get(userTarget.id);

    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#B5BFFF")
        .setAuthor(
          `Info about ${message.author.tag}.`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .addFields(
          {
            name: "When user joined Discord?",
            value: userTarget.createdTimestamp().toLocaleDateString(),
          },
          {
            name: "When user joined this guild?",
            value: memberTarget.joinedTimestamp().toLocaleDateString(),
          },
          { name: "How many roles does this member has got?" }
        )
    );
  },
};
