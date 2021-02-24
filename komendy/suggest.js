module.exports = {
    name: "suggest",
    description: "zasugeruj coś!",
    execute(message, args, Discord) {

        if(message.content.includes('@everyone') || message.content.includes('@here')) return;
        
        const channel = message.guild.channels.cache.get('813366441302556673');

        const suggestion = args.join(' ');
        if(!suggestion) return message.channel.send('Nie podałeś propozycji!');

        const embed = new Discord.MessageEmbed()
        .setColor('#B5BFFF')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle("Propozycja!")
        .setDescription(`**sugestia**: ${suggestion}`);

        channel.send(embed).then(m =>{
            m.react('👍');
            m.react('👎');
        })
    }
}