require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class PrefixFreeCommand extends Command {
	constructor(text) {
		super(text);
		this.usedWithoutPrefix = true;
	}
}

module.exports = PrefixFreeCommand;
