require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);


class Leave extends Command {
	constructor(any) {
		super(any);
		this.command = `leave`;
		this.category = `music`;
	}

	apply(any) {
		try {
			if (this.voiceDevice.channel != null) {
				this.voiceDevice.channel.leave();
				this.messageSender.sendChannel(this.texter.getText(
					`music.leave.success`,
					{ key: `channel.name`, value: this.voiceDevice.channel.name }
				));
			} else {
				this.messageSender.sendChannel(this.texter.getText(`music.leave.fail`));
			}
		} catch (error) {
			this.messageSender.sendChannel(this.texter.getText(`generic.error`));
			console.log(error);
		}
	}
}


module.exports = Leave;
