require(`rootpath`)();
const ImageResponse = require(`src/js/structures/image-response.js`);


class Kimochi extends ImageResponse {
	constructor(text) {
		super(text);
		this.command = `kimochi`;
		this.category = `image`;
		this.imageURL = `https://cdn.discordapp.com/attachments/367071077219696641/367124085488222210/6184164_49307cfb1d373f79b1da1301d39bd61a.png`;
	}
}


module.exports = Kimochi;
