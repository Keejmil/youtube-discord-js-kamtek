const warnSchema = require('../../models/warnSchema');

module.exports = {
    name: "warn",
    aliases: [],
    description: "warn someone!",
    async execute(message, args, Discord, client) {
        const userTarget = message.mentions.users.first();
        if(!userTarget) {
            message.channel.send("Nie oznaczyłeś użytkownika.");            
            return;
        }

        const reason = args.slice(1).join(' ');
        if (!reason) {
            message.channel.send("Nie podałeś przyczyny.");
            return;
        }

        const warning = {
            moderator: message.author.tag,
            timestamp: new Date().getTime(),
            reason
        }

        await warnSchema.findOneAndUpdate({
            userID: userTarget.id,
            guildID: message.guild.id
        }, {
            $push: {
                warnings: warning
            }
        }, {
            upsert: true
        })

        message.channel.send(`Pomyślnie ostrzezono uzytkownika ${userTarget.tag} za ${reason}.`)
    }
}
// !warn <wzmianka> <powód>