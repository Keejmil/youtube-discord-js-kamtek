const { readdirSync } = require('fs');

module.exports = (client, Discord) => {
    const featureFiles = readdirSync('./features').filter(file => file.endsWith('.js'));

    for (const file of featureFiles) {
        const feature = require(`../features/${file}`);
        feature.run(client, Discord);
    }
}