class Command {
	constructor (text) {
		this.text = text;
		this.usedWithPrefix = true;
		this.usedWithoutPrefix = false;
	}

	apply ({ message, command, argument, options, messageSender, messageParser, channelFitler}) {
	}
}

module.exports = Command;
