module.exports = {
    name: "wyjdz",
    aliases: ['leave'],
    description: "wyjdz z jakiegos serwrea bota~!",
    async execute(message, args, Discord, client) {
        if (message.author.id != "452375865901449223") return;

        const serverID = args[0];
        if(!serverID) {
            message.channel.send('Nie podałeś ID serwera.')
            return;
        }

        const serverTarget = client.guilds.cache.get(serverID);
        if(!serverTarget) {
            message.channel.send('Podałeś neprawidłowe ID');
            return
        }

        serverTarget.leave();
        message.channel.send('Pomyslnie wyszedłem zserwera,')
    }
}

// !leave <id serwera>