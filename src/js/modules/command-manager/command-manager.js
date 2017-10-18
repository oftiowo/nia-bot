const MessageParser = require(`../parser/message-parser`);
class CommandManager {
	constructor() {
		this.prefix = `nia `;
		this.text = require(`../../../resources/lang/en/lang-en.json`);

		this.commands = {};
		const glob = require(`glob`);
		const path = require(`path`);
		glob.sync(`src/js/commands/**/*.js`).forEach(file => {
			let Command = require(path.resolve(file));
			let command = new Command(this.text);
			this.commands[command.command] = command;
		});
	}

	handle(msg) {
		if (MessageParser.messageHasPrefix(msg, this.prefix)) {
			let desc = MessageParser.parse(msg, this.prefix);
			if (this.commands[desc.command] !== undefined) {
				this.commands[desc.command].apply(msg, desc);
			}
		}
	}
}
module.exports = CommandManager;
