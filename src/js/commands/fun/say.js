require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class Say extends Command {
	constructor(any) {
		super(any);
		this.command = `say`;
		this.category = `fun`;
	}

	apply({ argument, messageSender }) {
		messageSender.sendChannel(argument);
	}
}

module.exports = Say;
