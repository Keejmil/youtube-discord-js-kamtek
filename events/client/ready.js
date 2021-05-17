const mongoose = require('mongoose');

module.exports = (client) => {
  console.log("Bot jest online!");

  mongoose.connect('mongodb+srv://keejmil:PRzAfLomn42dsl43@discordbotcluster.kyvun.mongodb.net/DiscordBotDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('Połączono z bazą danych.');
  })
  .catch((err) => {
    console.log(err);
  })
};

// password = PRzAfLomn42dsl43