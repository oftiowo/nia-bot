const YoutubeResolver = require(`./youtube-resolver`);

class MusicManager {
	constructor() {
		this.youtubeResolver = new YoutubeResolver();

		this.queue = [];
	}

	query(query) {
		let res = (info) => this.push(info);
		let rej = (error) => console.error(error ? error : `Unknown error in song resolve`);

		return new Promise((resolve, reject) => {
			if (this.youtubeResolver.test(query)) return this.youtubeResolver.resolve(query, res, rej);

			reject(query);
		})
			.then(info => {
				this.push(info);
				return info;
			});
	}

	push(info) {
		this.queue.push(info);
	}

	skip(from, to) {
		if (!from && !to) {
			to = 1;
			from = 0;
		} else if (!to) {
			to = from;
			from = 0;
		}

		let queue = this.queue.slice(0, from);
		queue.push(this.queue.slice(to, this.queue.length));
		this.queue = queue;
	}

	purge() {
		this.remove(0, this.queue.length);
	}

	playNext() {
		if (this.queue.length > 0) {
			this.np = this.queue[0];
			this.skip();
	
			this.voiceDevice.playArbitraryInput(this.np.url);
		}
	}
}

module.exports = MusicManager;
