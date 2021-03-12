module.exports = {
    name: 'invite',
    aliases: ['zapros'],
    description: 'zaproś bota na własny serwer!',
    execute(message, args, Discord, client) {
        let newEmbed = new Discord.MessageEmbed()

        .setColor('#FF0000')
        .setTitle('Zaproś mnie na swój serwer!')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=787739673036062722&permissions=8&scope=bot')
        .setDescription('Aby zaprosić mnie na własny serwer, użyj **linku powyżej**!')
        .setFooter('Z góry dzięki!');

        message.channel.send(newEmbed);
    }
}