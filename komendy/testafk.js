module.exports = {
    name: 'testafk',
    description: 'czy bot jest aktywny?',
    execute(message, args) {
        message.react('✅');
        message.channel.send('Jestem!');
    },
};