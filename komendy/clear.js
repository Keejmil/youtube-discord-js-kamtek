module.exports = {
    name: 'clear',
    description: 'wyczyśc kanał!',
    async execute(message, args, Discord, client) {
        if (!args[0]) return message.reply("Podaj ilość wiadomości, które chcesz usunąć!");

        if(isNaN(args[0])) return message.reply("Podaj numer, nie wyraz!");

        if(args[0] < 1) return message.reply("Nie możesz usunąć mniej niż jedną wiadomość!");

        if(args[0] > 100) return message.reply("Nie możesz usunąć więcedj niż 100 wiadomości!");

        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
    }
}