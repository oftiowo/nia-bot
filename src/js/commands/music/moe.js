require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class Moe extends Command {
	constructor(any) {
		super(any);
		this.command = `moe`;
		this.category = `music`;
	}

	apply({ message }) {
		this.voiceDevice.join(message)
			.then(({ connection, alreadyJoined }) => {
				if (!alreadyJoined) this.quickResponse(`music.join.success`, { channel_name: connection.channel.name });
				this.voiceDevice.playArbitraryInput(`https://listen.moe/stream`);
			})
			.catch(error => { if (error == `userNotInVoice`) this.quickResponse(error); });	
	}
}

module.exports = Moe;
