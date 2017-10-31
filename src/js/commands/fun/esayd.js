require(`rootpath`)();
const Esay = require(`src/js/commands/fun/esay.js`);

class Esayd extends Esay {
	constructor(any) {
		super(any);
		this.command = `esayd`;
		this.category = `fun`;
	}

	apply(desc) {
		desc.message.delete();
		super.apply(desc);
	}
}

module.exports = Esayd;
