const Discord = require(`discord.js`);
const Command = require(`../../structures/command.js`);
class UserAvatar extends Command {
	constructor(text) {
		super(text);
		this.command = `uavatar`;
		this.category = `info`;
	}

	apply(msg, desc) {
		if (desc.argument === undefined) {
			var user = msg.author;
			var guildMember = msg.guild.member(user);
		} else {
			let rawId = desc.argument.split(` `, 1)[0];
			try {
				var id = rawId.substring(3, rawId.length - 1);
				guildMember = msg.guild.members.get(id);
				user = guildMember.user;
			} catch (error) {
				msg.channel.send(this.text.generic.noUserFound);
				return;
			}
		}

		msg.channel.send({ embed: new Discord.RichEmbed()
			.setAuthor(user.name)
			.setImage(user.avatarURL) 
		});
	}
}
module.exports = UserAvatar;
