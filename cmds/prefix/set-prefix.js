const prefixSchema = require("../../models/prefixSchema");

module.exports = {
  name: "set-prefix",
  aliases: [],
  description: "set the guild's prefix!",
  async execute(message, args, Discord, client) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      message.channel.send("Nie masz uprawnienia do użycia tej komendy!");
      return;
    }

    const newPrefix = args.join(" ");
    if (!newPrefix) {
      message.channel.send("Nei podales nowego prefixu!");
      return;
    }

    await prefixSchema.findOneAndUpdate(
      {
        guildID: message.guild.id,
      },
      {
        prefix: newPrefix,
      },
      {
        upsert: true,
      }
    );

    message.channel.send(
      `Pomyślnie ustawiono nowyh prefix tego serwersa na ${newPrefix}`
    );
  },
};
