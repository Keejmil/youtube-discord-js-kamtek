const profileSchema = require('../../models/profileSchema');

module.exports = {
    name: "work",
    aliases: [],
    description: "work for coins!",
    async execute(message, args, Discord, client) {
        const randomNumber = Math.floor(Math.random() * 500) + 1;

        await profileSchema.findOneAndUpdate({
            userID: message.author.id,
            guildID: message.guild.id
        }, {
            $inc: {
                coins: randomNumber
            }
        }, {
            upsert: true
        })

        message.channel.send(`Pracowałeś i zarobiłeś \`${randomNumber}$\``)
    }
}