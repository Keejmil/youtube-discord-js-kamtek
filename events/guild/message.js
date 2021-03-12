module.exports = (Discord, client, message) =>{
    const { prefix } = require('../../config');

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    try {
        if(command) command.execute(message, args, Discord, client);
    } catch (err) {
        message.channel.send("Wystąpił błąd");
    }
}