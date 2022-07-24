
const { Chat } = require("./Chat.js");
const { TextEditor } = require("./TextEditor.js");
const { Terminal } = require("./Terminal.js")

class Room {

	constructor(roomID) {
		this.roomID = roomID;
		this.isLocked = false;
		this.users = {};
		this.chat = new Chat();
		this.textEditor = new TextEditor("Testing!");
		this.terminal = new Terminal();
	}

	addUser(user) {
		this.users[user.socketID] = user;
	}

	removeUser(socketID) {
		delete this.users[socketID];
	}

	toggleLock() {
		this.isLocked = !this.isLocked;
	}

}

module.exports = { Room }; 

