require(`rootpath`)();
const Discord = require(`discord.js`);
const Command = require(`src/js/structures/command.js`);
class UserInfo extends Command {
	constructor(text) {
		super(text);
		this.command = `uinfo`;
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
				msg.channel.send(this.text[`generic.userNotFound`]);
				return;
			}
		}

		msg.channel.send({ embed: new Discord.RichEmbed()
			.setAuthor(user.tag + ` aka ` + msg.guild.member(user).nickname)
			.setThumbnail(user.avatarURL)
			.addField(`Joined Discord at`, user.createdAt.toDateString())
			.addField(`Joined ` + msg.guild.name + ` at`, guildMember.joinedAt.toDateString()) 
		});
	}
}
module.exports = UserInfo;
