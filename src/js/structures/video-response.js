require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);
const VideoSourceURL = require(`video-source-url`);


class VideoResponse extends Command {
	constructor(any) {
		super(any);
		this.videoURL = undefined;
	}

	apply(any) {
		this.messageSender.sendChannel(VideoSourceURL.src(this.videoURL).src, { embed: {
			video: { 
				url: VideoSourceURL.src(this.videoURL).src
			} 
		}});
	}
}

module.exports = VideoResponse;
