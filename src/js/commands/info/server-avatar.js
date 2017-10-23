require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);


class ServerAvatar extends Command {
	constructor(text) {
		super(text);
		this.command = `savatar`;
		this.category = `info`;
	}

	apply({ message }) {
		this.messageSender.sendChannel({ file: message.guild.iconURL });
	}
}


module.exports = ServerAvatar;
