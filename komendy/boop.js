module.exports = {
    name: 'boop',
    description: 'Boop Beep!',
    execute(message, args, Discord, client) {
        message.channel.send('Beep! 🤖');
    },
};