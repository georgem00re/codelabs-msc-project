
class Media {

	constructor() {
		this.isAudioMuted = false;
		this.isVideoPaused = false;
	}

	toggleAudioMute() {
		this.isAudioMuted = !this.isAudioMuted;
	}

	toggleVideoPause() {
		this.isVideoPaused = !this.isVideoPaused;
	}

}

module.exports = { Media };