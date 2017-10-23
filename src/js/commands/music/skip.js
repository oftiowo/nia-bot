require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);


class Skip extends Command {
	constructor(any) {
		super(any);
		this.command = `skip`;
		this.category = `music`;
	}

	apply({ argument }) {
		
	}
}


module.exports = Skip;
