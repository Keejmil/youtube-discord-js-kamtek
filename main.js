const Discord = require('discord.js');
const nodemon = require('nodemon');
const client = new Discord.Client();
const { token, prefix } = require('./config.js');
const fs = require('fs');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./komendy/').filter(file => file.endsWith('.js'));


client.once('ready', () =>{
    console.log('Bot jest online!');
    client.user.setActivity('best bot on Discord <33', {type: 'COMPETING'});
});

for (const file of commandFiles) {
    const command = require(`./komendy/${file}`);
    client.commands.set(command.name, command);
}


client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'boop') {
        client.commands.get('boop').execute(message, args);
    } else if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'testafk') {
        client.commands.get('testafk').execute(message, args);
    } else if (command === 'invite') {
        client.commands.get('invite').execute(message, args, Discord);
    } else if (command === 'ankieta') {
        client.commands.get('ankieta').execute(message, args, Discord);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    }
});

client.login(token);