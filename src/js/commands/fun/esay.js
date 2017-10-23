require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);


class Esay extends Command {
	constructor(any) {
		super(any);
		this.command = `esay`;
		this.category = `fun`;
	}

	apply({ argument }) {
		let content = argument.replace(/(^[^:]+)|(((?!:).)*[^\w:]((?!:).)*(?=:))|([^:]+$)/gi, (match) => {
			return match.replace(/sos| be |^be | be$|^be$|waifu/gi, (match) => {
				switch (match) {
				case `sos`:	return `:sos:`;
				case `be`:	return `:b:`;
				case ` be`:	return ` :b:`;
				case `be `:	return `:b: `;
				case ` be `:	return ` :b: `;
				case `waifu`:	return `:put_litter_in_its_place:`;
				}
				return match;
			});
		});

		this.messageSender.sendChannel(content.replace(/(^[^:]+)|(((?!:).)*[^\w:]((?!:).)*(?=:))|([^:]+$)/gi, (match) => {
			return match.replace(/(\d)|([a-z])|(\W)/gi, (match, digit, letter, symbol) => {
				if (digit) {
					switch (digit) {
					case `0`:	return `:zero:`;
					case `1`:	return `:one:`;
					case `2`:	return `:two:`;
					case `3`:	return `:three:`;
					case `4`:	return `:four:`;
					case `5`:	return `:five:`;
					case `6`:	return `:six:`;
					case `7`:	return `:seven:`;
					case `8`:	return `:eight:`;
					case `9`:	return `:nine:`;
					}
				} else if (letter) {
					return `:regional_indicator_${letter.toLowerCase()}:`;
				} else if (symbol) {
					switch (symbol) {
					case `%`:	return `:wheelchair:`;
					case `*`:	return `:anger:`;
					case `'`:	return ``;
					}
				}
				return match;
			});
		}));
	}
}


module.exports = Esay;
