require(`rootpath`)();
const Say = require(`src/js/commands/fun/say.js`);

class Sayd extends Say {
	constructor(any) {
		super(any);
		this.command = `sayd`;
		this.category = `fun`;
	}
	
	apply({ message, argument, messageSender }) {
		super.apply({ message, argument, messageSender });
		message.delete();
	}
}

module.exports = Sayd;
