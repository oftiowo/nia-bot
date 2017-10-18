class MessageParser {
	static messageHasPrefix(msg, prefix) {
		return msg.content.startsWith(prefix);
	}

	static parse(msg, prefix) {
		let desc = {};
		desc.options = {};

		let tokens = msg.content.substring(prefix.length).toLowerCase().split(` `, 2);
		desc.command = tokens[0];

		if (tokens[1] !== undefined) {
			desc.argument = tokens[1].substring(0, tokens[1].search(` --`));
			
			tokens = tokens[1].substring(tokens[1].search(` --`) + 1).split(` `);
			for (let i = 1; i < tokens.length; i++) {
				let token = tokens[i];
				if (token.startsWith(`--`)) {
					var pendingOpt = true;
					var optKey = token.substring(2);
				} else if (pendingOpt) {
					desc.options[optKey] = token;
					pendingOpt = false;
				}
			}
		}
		
		return desc;
	}
}
module.exports = MessageParser;
