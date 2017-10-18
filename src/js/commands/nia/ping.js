require(`rootpath`)();
const TextResponse = require(`src/js/structures/text-response.js`);
class Ping extends TextResponse {
	constructor(text) {
		super(text);
		this.command = `ping`;
		this.category = `nia`;
		this.responsePath = `nia.ping`;
	}
}
module.exports = Ping;
