require(`rootpath`)();
const MessageSender = require(`../modules/message-sender/message-sender.js`);
const Command = require(`src/js/structures/command.js`);
class TextResponse extends Command {
	constructor(text) {
		super(text);
	}

	apply(msg, desc) {
		MessageSender.sendChannelMessage(msg, this.text[this.responsePath]);
	}
}
module.exports = TextResponse;
