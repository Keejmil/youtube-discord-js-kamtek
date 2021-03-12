module.exports = {
    name: 'ankieta',
    aliases: ['poll', 'stworzankiete'],
    description: 'zrób ankietę!',
    async execute(message, args, Discord, client) {
        let Arguments = args.join(' ');

        let newEmbed = new Discord.MessageEmbed()
	    .setColor('#FFFFFF')
	    .setTitle(`Ankieta: ${Arguments}?`)
	    .setDescription('Ankieta. ')
        .setFooter('Użyj reakcji, aby zagłosować.');

        let messageEmbed = await message.channel.send(newEmbed);

        messageEmbed.react('👍');
        messageEmbed.react('👎');
    }
}