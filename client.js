const Discord = require('discord.js');
const auth = require('./auth.json');
const client = new Discord.Client();
const messageResponder = require('./text-commands/responder.js');

client.on('ready', () => { 
    console.log('READY');
})

client.on('message', messageResponder.respond);

client.login(auth.token);
