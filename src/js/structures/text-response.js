require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);


class TextResponse extends Command {
	constructor(text) {
		super(text);
		this.textPath = undefined;
	}

	apply(any) {
		try {
			this.messageSender.sendChannel(this.texter.getText(this.textPath));			
		} catch (error) {
			this.messageSender.sendChannel(this.texter.getText(`generic.wrongPath`));
		}
	}
}


module.exports = TextResponse;
