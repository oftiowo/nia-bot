require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);


class TextResponse extends Command {
	constructor(any) {
		super(any);
		this.templateName = undefined;
	}

	apply(any) {
		if (this.messageOptions === undefined) {
			let template = this.texter.getTemplate(this.templateName);
			this.messageOptions = template.toMessageOptions();
		}
		this.messageSender.sendChannel(this.messageOptions);
	}
}

module.exports = TextResponse;
