class MessageSender {
	sendChannel(content, options) {
		if (content === `` && options === undefined) return;
		this.channel.send(content, options);
	}

	sendDm() {
		// TODO
	}
}


module.exports = MessageSender;
