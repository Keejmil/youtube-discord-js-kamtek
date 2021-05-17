const profileSchema = require('../../models/profileSchema');

module.exports = {
    name: "balance",
    aliases: ['bal'],
    description: "shows your actual balance!",
    async execute(message, args, Discord, client) {
        const userTarget = message.mentions.users.first() || message.author;

        const profileData = await profileSchema.findOne({
            userID: userTarget.id,
            guildID: message.guild.id
        })
        if(!profileData || profileData === null) {
            message.channel.send("ten użytkownik nie jest zarejestrowany w bazie danych.");
            return;
        }

        message.channel.send(`Balans użytkownika ${userTarget}:\n\nPortfel: ${profileData.coins}\nBank: ${profileData.bank}`)
    }
}