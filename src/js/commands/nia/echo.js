require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class Echo extends Command {
	constructor(text) {
		super(text);
		this.command = `echo`;
		this.category = `nia`;
	}

	apply({ argument, options }) {
		let response = `"argument": "` + argument + `"\n"options": {\n`;
		Object.keys(options).forEach(key => response += `  "` + key + `": "` + options[key] + `",\n`);
		response += `}`;
		this.messageSender.sendChannel(response);
	}
}

module.exports = Echo;
