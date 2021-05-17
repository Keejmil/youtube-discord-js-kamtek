const path = require('path');

module.exports = {
    name: "play",
    aliases: [],
    description: "play music!",
    async execute(message, args, Discord, client) {
        const { voice } = message.member;
        if(!voice.channelID) {
            message.channel.send("Nie jesteś na kanale głosowym!");
            return;
        }

        voice.channel.join().then(connection => {
            connection.play(path.join(__dirname, 'muzyka.mp3'))
        })
    }
}