require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class Setlang extends Command {
	constructor(text) {
		super(text);
		this.command = `setlang`;
		this.category = `nia`;
	}

	apply({ argument }) {
		if (argument === undefined) this.messageSender.sendChannel(this.text[`textgeneric.noArgumentsProvided`]);
		let lang = argument.split(` `, 1)[0];
		try {
			this.commandManager.setLang(lang);			
			this.messageSender.sendChannel(this.texter.getText(
				`nia.setlang.success`,
				{ key: `lang`, value: lang }
			));
		} catch (err) {
			this.messageSender.sendChannel(this.texter.getText(
				`nia.setlang.fail`,
				{ key: `lang`, value: lang }
			));
		}
	}
}

module.exports = Setlang;
