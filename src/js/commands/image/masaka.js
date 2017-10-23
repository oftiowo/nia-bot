require(`rootpath`)();
const ImageResponse = require(`src/js/structures/image-response.js`);


class Masaka extends ImageResponse {
	constructor(text) {
		super(text);
		this.command = `masaka`;
		this.category = `image`;
		this.imageURL = `https://media.discordapp.net/attachments/321605040538386453/370441262316388353/31e.png`;
	}
}


module.exports = Masaka;
