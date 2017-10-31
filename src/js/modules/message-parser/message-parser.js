class MessageParser {
	constructor() {
		this.prefix = `niavoice `;
	}

	parse(message) {
		let desc = {};
		desc.message = message;

		desc.hasPrefix = message.content.startsWith(this.prefix);
		if (desc.hasPrefix) {
			var raw = message.content.substring(this.prefix.length);
		} else {
			raw = message.content;
		}
		raw = raw.trim();
		
		desc.command = raw.split(` `, 1)[0];

		desc.options = {};
		let argAndOpts = raw.substring(desc.command.length).trim();
		if (argAndOpts === undefined) return desc;

		let optStartIndex = argAndOpts.search(`--`);
		if (optStartIndex == -1) {
			desc.argument = argAndOpts;
			return desc;
		}

		desc.argument = argAndOpts.substring(0, optStartIndex).trim();
		let opts = argAndOpts.substring(optStartIndex);

		while (opts != ``) {
			let nextOptIndex = opts.indexOf(` --`);
			let opt = nextOptIndex == -1 ? opts : opts.substring(0, nextOptIndex);
			let spaceIndex = opt.indexOf(` `);
			let key = spaceIndex == -1 ? opt.substring(2).trim() : opt.substring(2, spaceIndex);
			let value =  spaceIndex == -1 ? `` : opt.substring(spaceIndex + 1).trim();
			desc.options[key] = value;

			if (nextOptIndex == -1) break;
			opts = opts.substring(nextOptIndex + 1);
		}

		return desc;
	}

	resolveId(rawId) {
		if (/<@\d*>/.test(rawId)) {
			return rawId.substring(2, rawId.indexOf(`>`));
		} else if (/<@!\d*>/.test(rawId)) {
			return rawId.substring(3, rawId.indexOf(`>`));
		}
		return undefined;
	}
}

module.exports = MessageParser;
