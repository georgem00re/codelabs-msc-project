
class User {
	constructor(socketID) {
		this.socketID = socketID
		this.isVideoPaused = false;
		this.isVideoMuted = false;
	}

	setDisplayName(value) {
		this.displayName = value;
	}

	toggleVideoMute() {
		this.isVideoMuted = !this.isVideoMuted;
	}

	toggleVideoPause() {
		this.isVideoPaused = !this.isVideoPaused;
	}

	setPeerID(peerID) {
		this.peerID = peerID;
	}

	getRooms(io) {
		return io.sockets.adapter.sids[this.socketID]
	}
}

module.exports = { User }; 

