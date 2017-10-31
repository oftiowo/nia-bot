require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class Queue extends Command {
	constructor(any) {
		super(any);
		this.command = `queue`;
		this.category = `music`;
	}

	apply({ argument }) {
		
	}
}

module.exports = Queue;
