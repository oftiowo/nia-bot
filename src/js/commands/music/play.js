require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);
const Path = require(`path`);
const Opus = require(`node-opus`);
const Request = require(`request`);
const YouTubeDL = require(`youtube-dl`);

class Play extends Command {
	constructor(any) {
		super(any);
		this.command = `play`;
		this.category = `music`;
	}

	apply({ message, argument }) {
		this.voiceDevice.join(message)
			.then(({ connection, alreadyJoined }) => {
				if (!alreadyJoined) this.quickResponse(`music.join.success`, { channel_name: connection.channel.name });

				if (argument == ``) return this.quickResponse(`noArgumentsProvided`);
				
				if (argument.toLowerCase().startsWith(`http`)) {
					YouTubeDL.getInfo(argument, [], (error, info) => {
						if (error) return this.quickResponse(`generic.error`);
						this.voiceDevice.playArbitraryInput(info.url);
					});
				}
			})
			.catch(error => { if (error == `userNotInVoice`) this.quickResponse(error); });
	}
}

module.exports = Play;
