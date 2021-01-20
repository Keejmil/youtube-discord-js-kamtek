module.exports = {
    name: 'ping',
    description: 'Ping Pong!',
    execute(message, args) {
        message.reply('Pong! :ping_pong:');
    },
};