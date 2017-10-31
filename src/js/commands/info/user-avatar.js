require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class UserAvatar extends Command {
	constructor(text) {
		super(text);
		this.command = `uavatar`;
		this.category = `info`;
	}

	apply({ message, argument }) {		
		if (argument === ``) {
			var user = message.author;
			var guildMember = message.guild.member(user);
		} else {
			try {
				var id = this.messageParser.resolveId(argument);
				guildMember = message.guild.members.get(id);
				user = guildMember.user;
			} catch (error) {
				this.messageSender.sendChannel(this.texter.getText(`generic.userNotFound`));
				return;
			}
		}

		let template = this.texter.getTemplate(`user-avatar`);
		template.setProperty(`user_username`, user.username);
		template.setProperty(`user_avatarURL`, user.avatarURL);
		this.messageSender.sendChannel(template.toMessageOptions());
	}
}

module.exports = UserAvatar;
