require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class Leave extends Command {
	constructor(any) {
		super(any);
		this.command = `leave`;
		this.category = `music`;
	}

	apply(any) {
		this.voiceDevice.leave()
			.then(channel => this.quickResponse(`leave`, `success`, { channel_name: channel.name }))
			.catch(error => this.quickResponse(error));
	}
}

module.exports = Leave;
