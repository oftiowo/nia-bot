require(`rootpath`)();
const Discord = require(`discord.js`);
const Command = require(`src/js/structures/command.js`);
class ServerAvatar extends Command {
	constructor(text) {
		super(text);
		this.command = `savatar`;
		this.category = `info`;
	}

	apply(msg) {
		
	}
}
module.exports = ServerAvatar;
