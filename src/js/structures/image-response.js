require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);


class ImageResponse extends Command {
	constructor(any) {
		super(any);
		this.imageURL = undefined;
	}

	apply(any) {
		this.messageSender.sendChannel({ file: this.imageURL });
	}
}

module.exports = ImageResponse;
