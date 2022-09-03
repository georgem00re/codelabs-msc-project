
const { lab } = require("../state/lab.js");

module.exports = function onDisconnecting(io, socket) {
	socket.on("disconnecting", () => {
		lab.removeUser(socket.id);
		if (Object.keys(lab.users).length == 0) {
			process.exit();
		}
		io.sockets.emit("update-lab", lab);
	})
}