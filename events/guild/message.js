module.exports = (Discord, client, message) =>{
    const { prefix } = require('../../config');

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(command.permissions) {
        const authorPerms = message.channel.permissionsFor(message.author);
        if(!authorPerms || !authorPerms.has(command.permissions)) {
            return message.reply(`Nie możesz użyć tej komendy, ponieważ nie masz potrzebnych do niej permisji.`);
        }
    }

    try {
        if(command) command.execute(message, args, Discord, client);
    } catch (err) {
        message.channel.send("Wystąpił błąd");
        console.log(err);
    }
}