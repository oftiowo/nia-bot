require(`rootpath`)();
const TextResponse = require(`src/js/structures/text-response.js`);

class Explosion extends TextResponse {
	constructor(text) {
		super(text);
		this.command = `explosion`;
		this.category = `video`;
		this.url = `https://www.youtube.com/watch?v=Vjg4f-9_oZM`;
	}
}

module.exports = Explosion;
