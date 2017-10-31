require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class Volume extends Command {
	constructor(any) {
		super(any);
		this.command = `volume`;
		this.category = `music`;
	}

	apply({ message, argument }) {
		if (!/^[\d.]+$/.test(argument)) return this.quickResponse(`error`);
		if (!this.voiceDevice.dispatcher) return this.quickResponse(`noVoice`);

		this.voiceDevice.dispatcher.setVolume(argument);
		this.quickResponse(`lel`);
	}
}

module.exports = Volume;
