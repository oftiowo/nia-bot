require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);


class ImageResponse extends Command {
	constructor(text) {
		super(text);
		this.imageURL = undefined;
	}

	apply(any) {
		this.messageSender.sendChannel({ file: this.imageURL });
	}
}


module.exports = ImageResponse;
