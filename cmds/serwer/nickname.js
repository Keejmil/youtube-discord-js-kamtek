module.exports = {
    name: "nickname",
    aliases: [],
    description: "set nickname to guild member!",
    async execute(message, args, Discord, client) {
        const userTarget = message.mentions.users.first();
        if(!userTarget) {
            message.channel.send("Nie oznaczyłeś osoby.");
            return;
        }

        const memberTarget = message.guild.members.cache.get(userTarget.id);

        const newNickname = args.slice(1).join(' ');
        if(!newNickname) {
            message.channel.send("Nie podałeś nowego nickname'u!");
            return;
        }

        memberTarget.setNickname(newNickname);
    }
}

// !nickname @wzimanka <nowy nickname>