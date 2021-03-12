module.exports = {
    name: "mute",
    aliases: [],
    description: "mute someone!",
    execute(message, args, Discord, client) {
        const mainRole = message.guild.roles.cache.get('808331422770135071');
        const mutedRole = message.guild.roles.cache.get('798228899951280129');

        const memberTarget = message.mentions.users.first();
        if(!memberTarget) return message.reply("Nie oznaczyłeś uzytkownika, którego chcesz wyciszyć!");

        memberTarget.roles.remove(mainRole);
        memberTarget.roles.add(mutedRole);

        message.channel.send(`Użytkownik ${memberTarget} został wyciszony.`);
    }
}