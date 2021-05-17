const warnSchema = require('../../models/warnSchema');

module.exports = {
    name: "list-warnings",
    aliases: [],
    description: "see someone warnings!",
    async execute(message, args, Discord, client) {
        const userTarget = message.mentions.users.first();
        if(!userTarget) {
            message.channel.send("Nie podałeś użytkownika.");
            return;
        }

        const results = await warnSchema.findOne({
            userID: userTarget.id,
            guildID: message.guild.id
        })

        if(!results || results === null) {
            message.channel.send("Nie znaleziono ostrzezen.");
            return;
        }

        let reply = `Poprzednie ostrzezenia dla uzytkownika ${userTarget}:\n\n`;

        for(const warning of results.warnings) {
            const { moderator, timestamp, reason } = warning;

            reply += `Od: ${moderator}, kiedy: ${new Date(timestamp).toLocaleDateString()}, powód: ${reason}\n`;
        }

        message.channel.send(reply)
    }
}