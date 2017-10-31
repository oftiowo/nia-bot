class VoiceDevice {
	constructor() {
		this.options = {
			volume: 0.1,
			passes: 3
		};
		this.onEndCallbacks = [];
	}

	join(message, options) {
		return new Promise((resolve, reject) => {
			let channels = message.guild.channels;
			
			if (options && options.voice) {
				var voiceChannel = channels.find(`name`, options.voice);
				if (voiceChannel == null) return reject(`noSuchVoice`);
			}
			else {
				voiceChannel = channels.find(channel => {
					if (channel.type != `voice`) return false;
					return channel.members.find(guildMember => { return guildMember.user.tag === message.author.tag; }) != null;
				});
				if (voiceChannel == null) return reject(`userNotInVoice`);
			}
			
			var alreadyJoined = this.channel != null && voiceChannel.name == this.channel.name;
			if (alreadyJoined) {
				resolve({ connection: this.connection, alreadyJoined: true });
			} else {
				this.leave();
				voiceChannel.join()
					.then(connection => {
						this.channel = voiceChannel;
						this.connection = connection;
		
						resolve({ connection: connection, alreadyJoined: false });
					})
					.catch(error => console.error(`join ---`, error));
			}
		});
	}
	
	leave() {
		return new Promise((resolve, reject) => {
			this.endStream();
			if (this.channel != null) {
				this.connection.disconnect();
				this.channel.leave();
				resolve(this.channel);
				this.channel = null;
				this.connection = null;
			}
			else {
				reject(`noVoice`);				
			}
		});		
	}

	connected() {
		return this.connection != null;
	}

	playStream(stream, options) {
		if (this.connection) {
			this.endStream();
			this.dispatcher = this.connection.playStream(stream, options ? options : this.options);
			this.dispatcher.setBitrate(192);
			this.dispatcher.on(`end`, this.onEnd());
		}
	}

	playArbitraryInput(input, options) {
		if (this.connection) {
			this.endStream();
			this.dispatcher = this.connection.playArbitraryInput(input, options ? options : this.options);
			this.dispatcher.setBitrate(192);
			this.dispatcher.on(`end`, this.onEnd());
		}
	}

	endStream() {
		if (this.dispatcher == null) return;
		this.dispatcher.end();
		this.dispatcher = null;

		if (this.radio == null) return;
		this.radio.end();
		this.radio = null;
	}

	pause() {
		return new Promise((resolve, reject) => {
			if (this.dispatcher == null) return reject(`noMusicStream`);
			this.dispatcher.pause();
			resolve(`success`);
		});
	}

	resume() {
		return new Promise((resolve, reject) => {
			if (this.dispatcher == null) return reject(`noMusicStream`);
			this.dispatcher.resume();	
			resolve(`success`);
		});
	}

	onEnd(callback) {
		if (callback) return this.onEndCallbacks.push(callback);

		this.dispatcher = null;
		this.onEndCallbacks.forEach(callback => callback());
	}
}

module.exports = VoiceDevice;
