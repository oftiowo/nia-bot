require(`rootpath`)();
const ImageResponse = require(`src/js/structures/image-response.js`);

class Shine extends ImageResponse {
	constructor(text) {
		super(text);
		this.command = `shine`;
		this.category = `image`;
		this.imageURL = `https://media.discordapp.net/attachments/321605040538386453/370441433791987712/ygeoWFc.png`;
	}
}

module.exports = Shine;
