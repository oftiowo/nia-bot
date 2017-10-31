class ChannelFilter {
	constructor() {
		this.channelFilterEnabled = false;
		this.allowedChannels = [];
	}

	channelIsAllowed(channel) {
		return !this.channelFilterEnabled || this.allowedChannels.indexOf(channel) == -1;
	}
}

module.exports = ChannelFilter;
