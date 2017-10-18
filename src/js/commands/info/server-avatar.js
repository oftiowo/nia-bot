require(`rootpath`)();
const MessageSender = require(`src/js/modules/message-sender/message-sender.js`);
const Command = require(`src/js/structures/command.js`);
class ServerAvatar extends Command {
	constructor(text) {
		super(text);
		this.command = `savatar`;
		this.category = `info`;
	}

	apply(msg, desc) {
		MessageSender.sendImage(msg, msg.guild.iconURL);
	}
}
module.exports = ServerAvatar;
