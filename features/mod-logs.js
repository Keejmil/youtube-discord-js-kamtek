module.exports.run = (client, Discord) => {
    client.on('messageDelete', async (message) => {
        if(!message.guild) return;

        const channelId = '819959356451323945';
        const logChannel = message.guild.channels.cache.get(channelId);

        const fetchedLogs = await message.guild.fetchAuditLogs({
            limit: 1,
            type: 'MESSAGE_DELETE',
        });

        const deletionLog = fetchedLogs.entries.first();

        const { executor } = deletionLog;

        let embed = new Discord.MessageEmbed()
        .setColor('#00bfff')
        .setTitle("Mod - logi: usunięto wiadomość.")
        .addFields(
            {
                name: 'Na jakim kanale została usunięta ta wiadomość?',
                value: `<#${message.channel.id}>`,
            },
            {
                name: 'Kto był autorem wiadomości?',
                value: message.author.tag,
            },
            {
                name: "Jaką treść zawierała ta wiadomość?",
                value: message.content,
            },
            {
                name: "Kto usunął wiadomość?",
                value: executor.tag || "Nie udało się wykryć, kto usunął wiadomość."
            },
        )

        logChannel.send(embed);
    })

    client.on('messageUpdate', async (oldMessage, newMessage) => {
        if(!oldMessage.guild) return;

        const channelId = '819959356451323945';
        const logChannel = oldMessage.guild.channels.cache.get(channelId);

        const fetchedLogs = await oldMessage.guild.fetchAuditLogs({
            limit: 1,
            type: 'MESSAGE_UPDATE',
        });

        const deletionLog = fetchedLogs.entries.first();

        const { executor } = deletionLog;

        let embed = new Discord.MessageEmbed()
        .setColor('#00bfff')
        .setTitle("Mod - logi: zedytowano wiadomość wiadomość.")
        .addFields(
            {
                name: 'Na jakim kanale została zedytowana ta wiadomość?',
                value: `<#${oldMessage.channel.id}>`,
            },
            {
                name: 'Kto był autorem wiadomości?',
                value: newMessage.author.tag,
            },
            {
                name: "Jaką treść wtedy zawierała ta wiadomość?",
                value: oldMessage.content,
            },
            {
                name: "Jaka jest teraźniejsza treść tej wiadomości?",
                value: newMessage.content
            },
        )

        logChannel.send(embed);
    })

};