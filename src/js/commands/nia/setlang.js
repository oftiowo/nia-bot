require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class Setlang extends Command {
	constructor(text) {
		super(text);
		this.command = `setlang`;
		this.category = `nia`;
	}

	apply({ argument, messageSender }) {
		if (argument === undefined) messageSender.sendChannel(this.text[`textgeneric.noArgumentsPassed`]);
		let lang = argument.split(` `, 1)[0];
		let nia = require(`src/js/nia.js`);
		try {
			nia.commandManager.setLang(lang);			
			messageSender.sendChannel(this.text[`nia.setlang.success`]);
		} catch (err) {
			messageSender.sendChannel(this.text[`nia.setlang.fail`]);
		}
	}
}

module.exports = Setlang;
