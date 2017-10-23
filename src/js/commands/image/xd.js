require(`rootpath`)();
const ImageResponse = require(`src/js/structures/image-response.js`);


class Xd extends ImageResponse {
	constructor(text) {
		super(text);
		this.command = `xd`;
		this.category = `image`;
		this.imageURL = `https://cdn.discordapp.com/attachments/367071077219696641/367124874105323542/079.gif`;
	}
}


module.exports = Xd;
