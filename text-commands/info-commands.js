const Discord = require('discord.js');

exports.uinfo = function (message, args) {
	var user;
	if (args.length == 0) {
		user = message.author;
	} else {
		var member = args[0].length > 3 ? message.guild.members.get(args[0].substring(3, args[0].length - 1)) : undefined;
		if (typeof member === 'undefined') {
			message.channel.send(':x: No user found with such name');
			return;
		}
		user = member.user;
	}
	message.channel.send({ embed: new Discord.RichEmbed()
		.setAuthor(user.tag + ' aka ' + message.guild.member(user).nickname)
		.setThumbnail(user.avatarURL)
		.addField('Joined Discord at', user.createdAt.toDateString())
		.addField('Joined ' + message.guild.name + ' at', message.guild.member(user).joinedAt.toDateString()) });
}

exports.uavatar = function (message, args) {
	var user;
	if (args.length == 0) {
		user = message.author;
	} else {
		var member = args[0].length > 3 ? message.guild.members.get(args[0].substring(3, args[0].length - 1)) : undefined;
		if (typeof member === 'undefined') {
			message.channel.send(':x: No user found with such name');
			return;
		}
		user = member.user;
	}
	message.channel.send({ embed: new Discord.RichEmbed()
		.setAuthor(user.name)
		.setImage(user.avatarURL) 
	});
}

exports.sinfo = function (message, args) {

}

exports.savatar = function (message, args) {

}
