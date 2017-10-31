class Command {
	constructor({ texter, commandManager, messageParser, messageSender, channelFilter, voiceDevice, musicManager }) {
		this.texter = texter;
		this.commandManager = commandManager;
		this.messageParser = messageParser;
		this.messageSender = messageSender;
		this.channelFilter = channelFilter;
		this.voiceDevice = voiceDevice;
		this.musicManager = musicManager;

		this.usedWithPrefix = true;
		this.usedWithoutPrefix = false;
	}

	apply ({ message, command, argument, options }) {
	}

	quickResponse(specificator, path, properties) {
		this.texter.get(specificator, path, properties)
			.then(text => this.messageSender.sendChannel(text))
			.catch(path =>
				this.texter.get(`wrongPath`, { path: path })
					.then(text => this.messageSender.sendChannel(text))
					.catch(path => console.error(`wrong path:`, path))
			);
	}
}

module.exports = Command;
