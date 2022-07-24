
class Message {
	constructor(body, author, name) {
		this.body = body;
		this.author = author;
		this.name = name;
		this.timestamp = Date.now();
	}
}

module.exports = { Message };