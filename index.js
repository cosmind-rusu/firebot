const Discord = require("discord.js");
const client = new Discord.Client;
const config = require("config.json");

var prefix = config.prefix;




client.on("ready", () => {
    console.log(`$(client.user.username) esta listo!`);
    client.user.setActivity("encendido");
});





client.login(config.token);