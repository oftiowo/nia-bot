require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class Sayd extends Command {
	constructor(any) {
		super(any);
		this.command = `sayd`;
		this.category = `fun`;
	}
	
	apply({ message, argument, messageSender }) {
		messageSender.sendChannel(argument);
		message.delete();
	}
}

module.exports = Sayd;
