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

		this.commands = {};
		const glob = require(`glob`);
		const path = require(`path`);
		glob.sync(`src/js/commands/**/*.js`).forEach(file => {
			let Command = require(path.resolve(file));
			let command = new Command(this.text);
			this.commands[command.command] = command;
		});
	}

	handle(message) {
		if (!this.channelFilter.channelIsAllowed(message.channel)) return;

		if (this.messageParser.messageHasPrefix(message)) {
			let desc = this.messageParser.parse(message);
			desc.messageParser = this.messageParser;
			desc.messageSender = this.messageSender;
			desc.channelFilter = this.channelFilter;
			if (this.commands[desc.command] !== undefined) {
				this.messageSender.channel = message.channel;
				this.commands[desc.command].apply(desc);
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
