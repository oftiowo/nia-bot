const TextResponse = require(`../../structures/text-response.js`);
class Invite extends TextResponse {
	constructor(text) {
		super(text);
		this.command = `invite`;
		this.category = `nia`;
		this.responsePath = `nia.invite`;
	}
}
module.exports = Invite;
