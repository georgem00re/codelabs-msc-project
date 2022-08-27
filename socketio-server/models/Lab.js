
const { Chat } = require("./Chat.js");
const { CodeEditor } = require("./CodeEditor.js");
const { CodeTerminal } = require("./CodeTerminal.js")

class Lab {

	constructor() {
		this.users = {};
		this.codeEditor = new CodeEditor();
		this.codeTerminal = new CodeTerminal();
		this.chat = new Chat();
	}

	addUser(user) {
		this.users[user.socketID] = user;
	}

	removeUser(socketID) {
		delete this.users[socketID];
	}

}

module.exports = { Lab }; 

