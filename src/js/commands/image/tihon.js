require(`rootpath`)();
const ImageResponse = require(`src/js/structures/image-response.js`);

class Tihon extends ImageResponse {
	constructor(text) {
		super(text);
		this.command = `tihon`;
		this.category = `image`;
		this.image = `https://media.discordapp.net/attachments/321605040538386453/368644046572355584/4H8JBG7XN8Y.png`;
	}
}

module.exports = Tihon;
