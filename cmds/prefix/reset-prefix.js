const prefixSchema = require("../../models/prefixSchema");

module.exports = {
  name: "reset-prefix",
  aliases: [],
  description: "reset guild's prefix",
  async execute(message, args, Discord, client) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      message.channel.send("Nie masz uprawnienia do użycia tej komendy!");
      return;
    }

    let dbPrefix = await prefixSchema.findOne({ guildID: message.guild.id });
    if (!dbPrefix) {
      message.channel.send("Ten serwer nie miał jeszcez ustawionego prefxiu");
      return;
    }

    await prefixSchema.findOneAndDelete({ guildID: message.guild.id });
    message.channel.send(
      "POmyślnie zresetowano prefix. Od teraz korzystaj z `!`"
    );
  },
};

// let dbPrefix = await prefixSchema.findOne({ guildID: message.guild.id });
