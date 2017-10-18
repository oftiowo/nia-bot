const Discord = require(`discord.js`);
class MessageSender {
	static sendChannelMessage(msg, text) {
		msg.channel.send(text);
	}

	static sendImage(msg, image) {
		msg.channel.send(``, new Discord.Attachment(this.image));
	}
}
module.exports = MessageSender;
