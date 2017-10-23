require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);


class UserInfo extends Command {
	constructor(text) {
		super(text);
		this.command = `uinfo`;
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

		let template = this.texter.getTemplate(`user-info`);
		template.setProperty(`user.tag`, user.tag);
		template.setProperty(`guildMember.nickname`, guildMember.nickname);
		template.setProperty(`user.avatarURL`, user.avatarURL);
		template.setProperty(`user.createdAt`, user.createdAt.toDateString());
		template.setProperty(`guildMember.joinedAt`, guildMember.joinedAt.toDateString());
		template.setProperty(`guild.name`, message.guild.name);
		this.messageSender.sendChannel(template.toMessageOptions());
	}
}


module.exports = UserInfo;
