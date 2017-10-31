require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class Translit extends Command {
	constructor(any) {
		super(any);
		this.command = `translit`;
		this.category = `fun`;
	}

	apply({ message, argument }) {
		if (argument === undefined) return;
		
		if (/^<.[\d]*>$/g.test(argument)) {
			let id = argument.substring(2, argument.length - 1);
			
			try {
				var user = message.guild.members.get(id).user;
			} catch (error) {
				this.messageSender.sendChannel(this.text[`generic.userNotFound`]);
				return;
			}

			let messages = message.channel.messages;
			if (user.username == message.author.username) {
				this.messageSender.sendChannel(this.translitFromEnToRu(messages.findAll(`author`, user)[1].content));
			} else {
				this.messageSender.sendChannel(
					this.translitFromEnToRu(messages.find(m => m.author.username == user.username).content)
				);
			}
		} else {
			this.messageSender.sendChannel(this.translitFromEnToRu(argument));	
		}
	}

	translitFromEnToRu(string) {
		return string.replace(/([A-Z])|([a-z])|(\W)/g, (match, upperEn, lowerEn, symbol) => {
			if (upperEn) {
				switch (upperEn) {
				case `Q`:	return `Й`;
				case `W`:	return `Ц`;
				case `E`:	return `У`;
				case `R`:	return `К`;
				case `T`:	return `Е`;
				case `Y`:	return `Н`;
				case `U`:	return `Г`;
				case `I`:	return `Ш`;
				case `O`:	return `Щ`;
				case `P`:	return `З`;
				case `A`:	return `Ф`;
				case `S`:	return `Ы`;
				case `D`:	return `В`;
				case `F`:	return `А`;
				case `G`:	return `П`;
				case `H`:	return `Р`;
				case `J`:	return `О`;
				case `K`:	return `Л`;
				case `L`:	return `Д`;
				case `Z`:	return `Я`;
				case `X`:	return `Ч`;
				case `C`:	return `С`;
				case `V`:	return `М`;
				case `B`:	return `И`;
				case `N`:	return `Т`;
				case `M`:	return `Ь`;
				}
			} else if (lowerEn) {
				switch (lowerEn) {
				case `q`:	return `й`;
				case `w`:	return `ц`;
				case `e`:	return `у`;
				case `r`:	return `к`;
				case `t`:	return `е`;
				case `y`:	return `н`;
				case `u`:	return `г`;
				case `i`:	return `ш`;
				case `o`:	return `щ`;
				case `p`:	return `з`;
				case `a`:	return `ф`;
				case `s`:	return `ы`;
				case `d`:	return `в`;
				case `f`:	return `а`;
				case `g`:	return `п`;
				case `h`:	return `р`;
				case `j`:	return `о`;
				case `k`:	return `л`;
				case `l`:	return `д`;
				case `z`:	return `я`;
				case `x`:	return `ч`;
				case `c`:	return `с`;
				case `v`:	return `м`;
				case `b`:	return `и`;
				case `n`:	return `т`;
				case `m`:	return `ь`;
				}
			}	else if (symbol) {
				switch (symbol) {
				case `{`:	return `Х`;
				case `}`:	return `Ъ`;
				case `:`:	return `Ж`;
				case `"`:	return `Э`;
				case `<`:	return `Б`;
				case `>`:	return `Ю`;
				case `?`:	return `,`;
				case `~`:	return `Ё`;
				case `[`:	return `х`;
				case `]`:	return `ъ`;
				case `;`:	return `ж`;
				case `'`:	return `э`;
				case `,`:	return `б`;
				case `.`:	return `ю`;
				case `/`:	return `.`;
				case `@`:	return `"`;
				case `#`:	return `№`;
				case `$`:	return `;`;
				case `^`:	return `:`;
				case `&`:	return `?`;
				}
			}
				
			return match;
		});
	}
}

module.exports = Translit;
