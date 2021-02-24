const fs = require('fs');

module.exports = (client, Discord) =>{
    const commandFiles = fs.readdirSync('./komendy/').filter(file => file.endsWith('.js'));

    for(const file of commandFiles) {
        const command = require(`../komendy/${file}`);
        if(command.name){
            client.commands.set(command.name, command)
        } else {
            continue;
        }
    }
}