require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);
const MessageSender = require(`src/js/modules/message-sender/message-sender.js`);
class Setlang extends Command {
	constructor(text) {
		super(text);
		this.command = `setlang`;
		this.category = `nia`;
	}

	apply(msg, desc) {
		if (desc.argument === undefined) MessageSender.sendChannelMessage(msg, this.text.generic.noArgumentsPassed);
		let lang = desc.argument.split(` `, 1)[0];
		let nia = require(`src/js/nia.js`);
		try {
			nia.commandManager.setLang(lang);			
			MessageSender.sendChannelMessage(msg, this.text[`nia.setlang.success`]);
		} catch (err) {
			console.log(err);
			MessageSender.sendChannelMessage(msg, this.text[`nia.setlang.fail`]);
		}
	}
}
module.exports = Setlang;
