require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);


class Invite extends Command {
	constructor(text) {
		super(text);
		this.command = `invite`;
		this.category = `nia`;
	}

	apply(any) {
		this.messageSender.sendChannel(this.texter.getText(
			`nia.invite`,
			{ key: `inviteURL`, value: `https://discordapp.com/oauth2/authorize?&client_id=371891599438774272&scope=bot&permissions=213424050` }
		));
	}
}


module.exports = Invite;
