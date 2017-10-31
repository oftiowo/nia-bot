require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class Pause extends Command {
	constructor(any) {
		super(any);
		this.command = `pause`;
		this.category = `music`;
	}

	apply(any) {
	
	}
}

module.exports = Pause;
