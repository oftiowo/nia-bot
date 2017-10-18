require(`rootpath`)();
const Discord = require(`discord.js`);
const auth = require(`src/js/auth.json`);
const CommandManager = require(`src/js/modules/command-manager/command-manager.js`);

class Nia {
	constructor() {
		this.client = new Discord.Client();
		this.commandManager = new CommandManager();
		this.client.on(`ready`, () => console.log(`READY`));
		this.client.on(`message`, (msg) => this.commandManager.handle(msg));
		this.client.login(auth.token);
	}
}

module.exports = new Nia();
