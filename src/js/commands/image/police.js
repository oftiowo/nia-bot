require(`rootpath`)();
const ImageResponse = require(`src/js/structures/image-response.js`);

class Police extends ImageResponse {
	constructor(text) {
		super(text);
		this.command = `police`;
		this.category = `image`;
		this.image = `https://cdn.discordapp.com/attachments/367071077219696641/370206811518795778/image.jpg`;
	}
}

module.exports = Police;
