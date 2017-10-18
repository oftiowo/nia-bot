class MessageParser {
	static messageHasPrefix(msg, prefix) {
		return msg.content.startsWith(prefix);
	}

	static parse(msg, prefix) {
		let desc = {};
		desc.options = {};

		let [cmd, argAndOpts] = msg.content.substring(prefix.length).toLowerCase().split(` `, 2);
		desc.command = cmd;

		if (argAndOpts === undefined) return desc;

		let optStartIndex = argAndOpts.search(` --`);
		if (optStartIndex == -1) {
			desc.argument = argAndOpts;
			return desc;
		}

		desc.argument = argAndOpts.substring(0, optStartIndex);
		let opts = argAndOpts.substring(optStartIndex + 1).split(` `);
		for (let i = 1; i < opts.length; i++) {
			let opt = opts[i];
			if (opt.startsWith(`--`)) {
				var pendingOptValue = true;
				var optKey = opt.substring(2);
			} else if (pendingOptValue) {
				desc.options[optKey] = opt;
				pendingOptValue = false;
			}
		}
		
		return desc;
	}
}
module.exports = MessageParser;
