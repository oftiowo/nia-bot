const Discord = require(`discord.js`);
const auth = require(`./auth.json`);
const client = new Discord.Client();
const CommandManager = require(`./modules/command-manager/command-manager.js`);
const commandManager = new CommandManager();

client.on(`ready`, () => console.log(`READY`));
client.on(`message`, (msg) => commandManager.handle(msg));
client.login(auth.token);
