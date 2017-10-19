require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class ImageResponse extends Command {
	constructor(text) {
		super(text);
	}

	apply({ messageSender }) {
		messageSender.sendChannel({ file: this.image });
	}
}
module.exports = ImageResponse;
