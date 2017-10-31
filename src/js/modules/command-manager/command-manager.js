const Glob = require(`glob`);
const Path = require(`path`);

class CommandManager {
	reloadCommands(context) {
		this.prefixCommands = {};
		this.noPrefixCommands = {};

		Glob.sync(`src/js/commands/**/*.js`).forEach(file => {
			let ConcreteCommand = require(Path.resolve(file));
			let command = new ConcreteCommand(context);

			if (command.usedWithPrefix) this.prefixCommands[command.command] = command; 
			if (command.usedWithoutPrefix) this.noPrefixCommands[command.command] = command; 
		});
	}

	get({ command, hasPrefix }) {
		if (hasPrefix) {
			return this.prefixCommands[command];
		} else if (!hasPrefix) {
			return this.noPrefixCommands[command];
		}
		return undefined;
	}
}

module.exports = CommandManager;
