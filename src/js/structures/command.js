class Command {
	constructor (text) {
		this.text = text;
	}

	apply ({ message, command, argument, options, messageSender, messageParser, channelFitler}) {
	}
}
module.exports = Command;
