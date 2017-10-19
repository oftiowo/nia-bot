require(`rootpath`)();
const MessageParser = require(`src/js/modules/parser/message-parser.js`);
const MessageSender = require(`src/js/modules/message-sender/message-sender.js`);
const ChannelFilter = require(`src/js/modules/command-manager/channel-filter.js`);

class CommandManager {
	constructor() {
		this.messageParser = new MessageParser();
		this.messageSender = new MessageSender();
		this.channelFilter = new ChannelFilter();
		this.setLang(`en`);

		this.prefixCommands = {};
		this.noPrefixCommands = {};
		const glob = require(`glob`);
		const path = require(`path`);
		glob.sync(`src/js/commands/**/*.js`).forEach(file => {
			let Command = require(path.resolve(file));
			let command = new Command(this.text);

			if (command.usedWithPrefix) this.prefixCommands[command.command] = command; 
			if (command.usedWithoutPrefix) this.noPrefixCommands[command.command] = command; 
		});
	}

	handle(message) {
		if (!this.channelFilter.channelIsAllowed(message.channel)) return;

		let desc = this.messageParser.parse(message);
		desc.messageParser = this.messageParser;
		desc.messageSender = this.messageSender;
		desc.channelFilter = this.channelFilter;

		this.messageSender.channel = message.channel;

		if (this.messageParser.messageHasPrefix(message)) {
			if (this.prefixCommands[desc.command] !== undefined) {
				this.prefixCommands[desc.command].apply(desc);
			}
		} else {
			if (this.noPrefixCommands[desc.command] !== undefined) {
				this.noPrefixCommands[desc.command].apply(desc);
			}
		}
	}

	setLang(lang) {
		let text = require(`src/resources/lang/${lang}/lang-${lang}.json`);
		if (text === undefined) throw new Error(`${lang} language is not supported.`);
		this.text = text;
	}
}

module.exports = CommandManager;
