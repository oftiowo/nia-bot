require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class Resume extends Command {
	constructor(any) {
		super(any);
		this.command = `resume`;
		this.category = `music`;
	}

	apply(any) {
		
	}
}

module.exports = Resume;
