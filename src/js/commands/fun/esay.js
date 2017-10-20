require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class Esay extends Command {
	constructor(any) {
		super(any);
		this.command = `esay`;
		this.category = `fun`;
	}

	apply({ argument, messageSender }) {
		messageSender.sendChannel(argument
			.replace(/(\d)|([a-z])|(\W)/gi, (match, digit, letter, symbol) => {
				if (digit) {
					switch (digit) {
					case `0`:	return `:zero:`;
					case `1`:	return `:one:`;
					case `2`:	return `:two:`;
					case `3`:	return `:thre:`;
					case `4`:	return `:four:`;
					case `5`:	return `:five:`;
					case `6`:	return `:six:`;
					case `7`:	return `:seven:`;
					case `8`:	return `:eight:`;
					case `9`:	return `:nine:`;
					}
				} else if (letter) {
					return `:regional_indicator_${letter}:`;
				} else if (symbol) {
					switch (symbol) {
					case `%`:	return `:wheelchair:`;
					case `*`:	return `:anger:`;
					default: 	return symbol;
					}
				}
			})
		);
	}
}

module.exports = Esay;
