require(`rootpath`)();
const TextResponse = require(`src/js/structures/text-response.js`);

class Invite extends TextResponse {
	constructor(text) {
		super(text);
		this.command = `invite`;
		this.category = `nia`;
		this.textPath = `nia.invite`;
		this.url = `https://discordapp.com/oauth2/authorize?&client_id=371891599438774272&scope=bot&permissions=213424050`;
	}
}

module.exports = Invite;
