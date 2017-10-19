class ChannelFitler {
	constructor() {
		this.channelFilterEnabled = false;
		this.allowedChannels = [];
	}

	channelIsAllowed(channel) {
		return !this.channelFilterEnabled || this.allowedChannels.indowOf(channel) == -1;
	}
}

module.exports = ChannelFitler;
