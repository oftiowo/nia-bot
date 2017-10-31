require(`rootpath`)();
const Say = require(`src/js/commands/fun/say.js`);

class Sayd extends Say {
	constructor(any) {
		super(any);
		this.command = `sayd`;
		this.category = `fun`;
	}
	
	apply(desc) {
		desc.message.delete();
		super.apply(desc);
	}
}

module.exports = Sayd;
