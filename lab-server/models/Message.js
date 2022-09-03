
class Message {

	constructor(body, displayName, authorID) {
		this.body = body;
		this.displayName = displayName;
		this.authorID = authorID;
		this.timestamp = this.generateTimestamp();
	}

	generateTimestamp() {
		return Date.now();
	}
	
}

module.exports = { Message };