module.exports = {
    name: 'boop',
    description: 'Boop Beep!',
    execute(message, args) {
        message.channel.send('Beep! 🤖');
    },
};