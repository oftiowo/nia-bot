require(`rootpath`)();
const ImageResponse = require(`src/js/structures/image-response.js`);

class Yamero extends ImageResponse {
	constructor(text) {
		super(text);
		this.command = `yamero`;
		this.category = `image`;
		this.image = `https://media.discordapp.net/attachments/321605040538386453/370442616245846017/YPU7966rX1Q.jpg`;
	}
}

module.exports = Yamero;
