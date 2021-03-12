module.exports = {
    name: "unmute",
    aliases: [],
    description: "unmute someone!",
    execute(message, args, Discord, client) {
        const mainRole = message.guild.roles.cache.get('808331422770135071');
        const mutedRole = message.guild.roles.cache.get('798228899951280129');

        const memberTarget = message.mentions.users.first();
        if(!memberTarget) return message.reply("Nie oznaczyłeś uzytkownika, którego chcesz odwyciszyć!");

        try {
            memberTarget.roles.add(mainRole);
            memberTarget.roles.remove(mutedRole);
        } catch (err) {
            message.channel.send("Wystąpił błąd. Sprawdź, czy użytkownik na pewno jest wyciszony.")
        }

        message.channel.send(`Użytkownik ${memberTarget} został odwyciszony.`);
    }
}