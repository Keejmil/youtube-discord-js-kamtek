module.exports = {
    name: "rr",
    description: "stwórz reaction role!",
    execute(message, args, Discord, client) {
        if(!args[0] || !args[1] || !args[2] === null) {
            message.channel.send("Nie podałeś wszystkich argumentów!");
            return;
        }

        message.delete();

        let rolaZaReakcje = message.guild.roles.cache.get(args[2]);

        message.channel.messages.fetch(args[0]).then(message => message.react(args[1]));

        let emojiToReact = args[1];

        client.on('messageReactionAdd', async (reaction, user) =>{
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if(reaction.emoji.name === emojiToReact) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(rolaZaReakcje);
            } else {
                return;
            }
        })

        client.on('messageReactionRemove', async (reaction, user) =>{
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if(reaction.emoji.name === emojiToReact) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(rolaZaReakcje);
            } else{
                return;
            }
        })
    }
}