require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class Music extends Command {
	constructor(any) {
		super(any);
		this.command = `music`;
		this.category = `music`;
	}

	apply({ message, options }) {
		if (options.text) { // TESTME stupid
			let channel = message.guild.channels.find(`name`, options.text);
			if (channel == null) this.quickResponse(`noSuchText`);

			this.musicManager.messageSender.channel = channel;
		}
	}
}

module.exports = Music;
