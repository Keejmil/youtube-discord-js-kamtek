module.exports = {
    name: "create",
    aliases: [],
    description: "create a channel!",
    async execute(message, args, Discord, client) {
        const channel = await message.guild.channels.cache.get('8214628757376860664');

        channel.setParent('821462970071777311')
    }
}