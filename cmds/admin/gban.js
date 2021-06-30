const gbanSchema = require("../../models/gbanSchema");

module.exports = {
  name: "gban",
  aliases: [],
  description: "gban someone!",
  async execute(message, args, Discord, client) {
    if (message.author.id != "452375865901449223") return;

    const userTarget =
      message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!userTarget) {
      message.channel.send("Podales nieprawidlowego uzytkownika");
      return;
    }

    const reason = args.slice(1).join(" ");
    if (!reason) {
      message.channel.send("Nie podales przyczyny.");
      return;
    }

    const date = Date.now();
    // console.log(date)
    const moderatorID = message.author.tag;

    gbanSchema
      .create({
        userID: userTarget.id,
        moderatorID,
        reason,
        date,
      })
      .then((profile) => profile.save());

      message.channel.send('Pomyslnie zgabanowano uzytkownikka.')
  },
};

// !gban <@uzytkownik> <powod>
