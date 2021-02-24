const Discord = require('discord.js');
const nodemon = require('nodemon');
const chalk = require('chalk');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const { token } = require('./config.js');
const fs = require('fs');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command.handler', 'event.handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

// const commandFiles = fs.readdirSync('./komendy/').filter(file => file.endsWith('.js'));


// client.once('ready', () => {
//     console.log(chalk.blueBright(`Aplikacja o tagu ${client.user.tag} połączył się z Discordem.`));
//     client.user.setActivity('best bot on Discord <33', { type: 'COMPETING' });
// });

// client.on('guildMemberAdd', guildMember =>{
//     const channel = guildMember.guild.channels.cache.get('813690350483800084');

//     const embed = new Discord.MessageEmbed()
//     .setColor('#B5BFFF')
//     .setTitle("Dołączył do nas nowy użytkownik!")
//     .setDescription(`<@${guildMember.user.id}> dołączył do serwera!\n`
//         + `Jest nas teraz **${client.guilds.cache.get('793430159918891039').memberCount}**`);

//     channel.send(embed);
// })

// for (const file of commandFiles) {
//     const command = require(`./komendy/${file}`);
//     client.commands.set(command.name, command);
// }


// client.on('message', message => {
//     if (!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).trim().split(/ +/);
//     const command = args.shift().toLowerCase();

//     if (command === 'boop') {
//         client.commands.get('boop').execute(message, args);
//     } else if (command === 'ping') {
//         client.commands.get('ping').execute(message, args, client, chalk);
//     } else if (command === 'testafk') {
//         client.commands.get('testafk').execute(message, args);
//     } else if (command === 'invite') {
//         client.commands.get('invite').execute(message, args, Discord);
//     } else if (command === 'ankieta') {
//         client.commands.get('ankieta').execute(message, args, Discord);
//     } else if (command === 'ban') {
//         client.commands.get('ban').execute(message, args);
//     } else if (command === 'kick') {
//         client.commands.get('kick').execute(message, args);
//     } else if (command === 'clear') {
//         client.commands.get('clear').execute(message, args);
//     } else if (command === 'diss') {
//         client.commands.get('diss').execute(message, args);
//     } else if (command === "rr") {
//         client.commands.get('rr').execute(message, args, Discord, client);
//     } else if (command === "suggest") {
//         client.commands.get('suggest').execute(message, args, Discord);
//     }
// });

client.login(process.env.DISCORDBOTOKEN);