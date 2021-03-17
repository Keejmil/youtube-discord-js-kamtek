// server-stats.js

module.exports.run = (client, Discord) => {
    client.on('guildMemberAdd', (guildMember) => {
        const guildId = '793430159918891039';
        const memberCountChannelId = '816345612919242773';
        const nicknameChannel = '816345690660798504';

        client.channels.cache.get(memberCountChannelId).setName(`Ilość osób: ${client.guilds.cache.get(guildId).memberCount}`);
        client.channels.cache.get(nicknameChannel).setName(`Nowy: ${guildMember.user.username}`);
    })

    client.on('guildMemberRemove', (guildMember) => {
        const guildId = '793430159918891039';
        const memberCountChannelId = '816345612919242773';

        client.channels.cache.get(memberCountChannelId).setName(`Ilość osób: ${client.guilds.cache.get(guildId).memberCount}`);
    })
};