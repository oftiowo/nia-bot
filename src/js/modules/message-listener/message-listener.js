require(`rootpath`)();
const MessageParser = require(`src/js/modules/parser/message-parser`);
class MessageListener {
	constructor() {
		this.prefix = `nia `;
	}

	onMessagePosted(msg) {
		if (MessageParser.messageHasPrefix(msg, this.prefix)) {
			this.commandManager.handle(msg);
		}
	}
}
module.exports = MessageListener;
