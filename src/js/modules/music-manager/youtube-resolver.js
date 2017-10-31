const YouTubeDL = require(`youtube-dl`);

class YoutubeResolver {
	resolveUrl(query, resolve, reject) {
		if (query.toLowerCase().startsWith(`http`)) {
			YouTubeDL.getInfo(query, [], (error, info) => {
				if (error) return reject(error);

				resolve({ 
					title: info.title,
					url: info.url,
					thumbnail_url: info.thumbnail
				});
			});
		}
	}

	resolveSearch(query, resolve, reject) {
		
	}

	test(query) {
		return /^https:\/\/www.youtube.com.*/.test(query) || /^youtube.com.*/.test(query) ||
			/^https:\/\/youtu.be.*/.test(query) || /youtu.be.*/.test(query);
	}
}

module.exports = YoutubeResolver;
