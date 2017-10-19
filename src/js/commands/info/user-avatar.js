require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class UserAvatar extends Command {
	constructor(text) {
		super(text);
		this.command = `uavatar`;
		this.category = `info`;
	}

	apply({ message, argument, messageSender }) {
		if (argument === undefined) {
			var user = message.author;
			var guildMember = message.guild.member(user);
		} else {
			let rawId = argument.split(` `, 1)[0];
			try {
				var id = rawId.substring(2, rawId.length - 1);
				guildMember = message.guild.members.get(id);
				user = guildMember.user;
			} catch (error) {
				message.channel.send(this.text[`generic.userNotFound`]);
				return;
			}
		}

		messageSender.sendChannel({ embed: {
			author: {
				name: user.username,
				icon_url: user.avatarURL
			},
			image: {
				url: user.avatarURL
			}
		}});
	}
}

module.exports = UserAvatar;
