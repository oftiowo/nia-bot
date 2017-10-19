class MessageSender {
	sendChannel(content, options) {
		this.channel.send(content, options);
	}

	sendDm() {
		// TODO
	}
}

module.exports = MessageSender;
