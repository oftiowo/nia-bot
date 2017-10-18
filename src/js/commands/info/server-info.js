require(`rootpath`)();
const Discord = require(`discord.js`);
const Command = require(`src/js/structures/command.js`);
class ServerInfo extends Command {
	constructor(text) {
		super(text);
		this.command = `sinfo`;
		this.category = `info`;
	}

	apply(msg) {
		
	}
}
module.exports = ServerInfo;
