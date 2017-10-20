require(`rootpath`)();
const Esay = require(`src/js/commands/fun/esay.js`);

class Esayd extends Esay {
	constructor(any) {
		super(any);
		this.command = `esayd`;
		this.category = `fun`;
	}

	apply({ message, argument, messageSender }) {
		message.delete();
		super.apply({ message, argument, messageSender });
	}
}

module.exports = Esayd;
