
class Chat {
	constructor() {
		this.messages = [];
	}
	addMessage(msg) {
		this.messages.push(msg);
	}
}

module.exports = { Chat };