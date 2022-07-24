
class User {
	constructor(socketID) {
		this.socketID = socketID
	}

	setDisplayName(value) {
		this.displayName = value;
	}

	setPeerID(peerID) {
		this.peerID = peerID;
	}

	getRooms(io) {
		return io.sockets.adapter.sids[this.socketID]
	}
}

module.exports = { User }; 

