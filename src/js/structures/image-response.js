require(`rootpath`)();
const MessageSender = require(`src/js/modules/message-sender/message-sender.js`);
const Command = require(`src/js/structures/command.js`);
class ImageResponse extends Command {
	constructor(text) {
		super(text);
	}

	apply(msg, desc) {
		MessageSender.sendImage(msg, this.image);
	}
}
module.exports = ImageResponse;
