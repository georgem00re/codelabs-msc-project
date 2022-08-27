
const { Message } = require("./Message.js");

class Chat {

	constructor() {
		this.messages = [];
	}

	sendMessage(message) {
		this.messages.push(message);
	}
}

module.exports = { Chat };