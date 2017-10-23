require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);


class Play extends Command {
	constructor(any) {
		super(any);
		this.command = `play`;
		this.category = `music`;
	}

	apply({ argument }) {
		
	}
}


module.exports = Play;
