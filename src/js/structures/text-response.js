require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);


class TextResponse extends Command {
	constructor(any) {
		super(any);
	}

	apply(any) {
		try {
			let content = ``;
			if (this.textPath) content += this.texter.getText(this.textPath) + `\n`;		
			if (this.url) content += this.url;
			if (content != ``) this.messageSender.sendChannel(content);
		} catch (error) {
			console.error(error);
		}
	}
}

module.exports = TextResponse;
