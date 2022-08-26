
const { Media } = require("./Media.js");

class User {

	constructor(socketID, peerID, displayName) {
		this.socketID = socketID;
		this.peerID = peerID;
		this.displayName = displayName;
		this.media = new Media();
	}
	
}

module.exports = { User }; 

