
const { lab } = require("../state/lab.js");
const { Message } = require("../models/Message.js");

module.exports = function onSendMessage(io, socket) {
	socket.on("send-message", (messageBody) => {
		const message = new Message(messageBody, lab.users[socket.id].displayName, socket.id);
		lab.chat.sendMessage(message);
		io.sockets.emit("update-lab", lab);
	})
}
