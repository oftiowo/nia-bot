require(`rootpath`)();
const Discord = require(`discord.js`);
const Glob = require(`glob`);
const Path = require(`path`);
const auth = require(`auth.json`);

class Nia {
	constructor() {
		this.client = new Discord.Client();

		this.reloadModules();
		this.context.commandManager.reloadCommands(this.context);
		this.context.musicManager.voiceDevice = this.context.voiceDevice;
		this.context.musicManager.messageSender = this.context.voiceDevice;
	}

	reloadModules() {
		this.context = {};
		Glob.sync(`src/js/modules/*`).forEach(file => {
			let name = file.substring(file.lastIndexOf(`/`) + 1);
			let Module = require(Path.resolve(file + `/` + name + `.js`));
			let module = new Module();
			let nameCamelCase = name.replace(/-(\w)/, (match, letter) => { return letter.toUpperCase(); });
			this.context[nameCamelCase] = module;
		});
	}

	run() {
		this.client.on(`ready`, () => this.onReady());
		this.client.on(`message`, message => this.onMessage(message));
		this.client.login(auth.token);
	}

	onReady() {
		console.log(`READY`);
	}

	onMessage(message) {
		if (message.author.id == this.client.user.id) return;
		if (!this.context.channelFilter.channelIsAllowed(message.channel)) return;
		
		let desc = this.context.messageParser.parse(message);
		let command = this.context.commandManager.get(desc);
		if (command !== undefined) {
			this.context.messageSender.channel = message.channel;
			command.apply(desc);
		}
	}
}

const nia = new Nia();
nia.run();
