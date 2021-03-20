const fs = require("fs");

module.exports = (client, Discord) => {
    const commandFolders = fs.readdirSync('./cmds');

    for (const folder of commandFolders) {
        const commandFiles = fs.readdirSync(`./cmds/${folder}`).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`../cmds/${folder}/${file}`);

            if(command.name) {
                client.commands.set(command.name, command);
            } else {
                continue;
            }
        }
    }
};