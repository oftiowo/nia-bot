class Command {
	constructor({ texter, commandManager, messageParser, messageSender, channelFilter, voiceDevice, queueManager }) {
		this.texter = texter;
		this.commandManager = commandManager;
		this.messageParser = messageParser;
		this.messageSender = messageSender;
		this.channelFilter = channelFilter;
		this.voiceDevice = voiceDevice;
		this.queueManager = queueManager;

		this.usedWithPrefix = true;
		this.usedWithoutPrefix = false;
	}

	apply ({ message, command, argument, options }) {
	}
}


module.exports = Command;
