require(`rootpath`)();
const Discord = require(`discord.js`);
const Command = require(`src/js/structures/command.js`);

class UserInfo extends Command {
	constructor(text) {
		super(text);
		this.command = `uinfo`;
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

		messageSender.sendChannel({ embed: new Discord.RichEmbed()
			.setAuthor(user.tag + ` aka ` + message.guild.member(user).nickname)
			.setThumbnail(user.avatarURL)
			.addField(`Joined Discord at`, user.createdAt.toDateString())
			.addField(`Joined ` + message.guild.name + ` at`, guildMember.joinedAt.toDateString()) 
		});
	}
}

module.exports = UserInfo;
