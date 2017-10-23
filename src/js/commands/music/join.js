require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);


class Join extends Command {
	constructor(any) {
		super(any);
		this.command = `join`;
		this.category = `music`;
	}

	apply({ message, options }) {
		let channels = message.guild.channels;
		if (options[`voice`] == undefined) {
			var voiceChannel = channels.find(channel => {
				if (channel.type != `voice`) return false;
				return channel.members.find(guildMember => { return guildMember.user.tag === message.author.tag; }) != null;
			});
		} else {
			voiceChannel = channels.find(`name`, options[`voice`]);
		}		

		try {
			voiceChannel.join();

			this.voiceDevice.channel = voiceChannel;
			this.messageSender.sendChannel(this.texter.getText(
				`music.join.success`,
				{ key: `channel.name`, value: voiceChannel.name }
			));
		} catch (error) {
			this.messageSender.sendChannel(this.texter.getText(
				`music.join.success`,
				{ key: `channel.name`, value: this.voiceDevice.channel.name }
			));
		}
	}
}


module.exports = Join;
