require(`rootpath`)();
const ImageResponse = require(`src/js/structures/image-response.js`);

class Korosu extends ImageResponse {
	constructor(text) {
		super(text);
		this.command = `korosu`;
		this.category = `image`;
		this.image = `https://media.discordapp.net/attachments/321605040538386453/370441206062120970/Z.png`;
	}
}

module.exports = Korosu;
