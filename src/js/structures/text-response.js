require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class TextResponse extends Command {
	constructor(text) {
		super(text);
	}

	apply({ messageSender }) {
		messageSender.sendChannel(this.text[this.responsePath]);
	}
}
module.exports = TextResponse;
