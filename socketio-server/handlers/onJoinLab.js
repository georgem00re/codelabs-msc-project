
const { User } = require("../utils/User.js");
const { lab } = require("../state/lab.js");

module.exports = function onJoinLab(io, socket) {
	socket.on("join-lab", (peerID, displayName) => {
		const user = new User(socket.id, peerID, displayName == null ? "Anonymous" : displayName);
		lab.addUser(user);
		io.sockets.emit("update-lab", lab);
	})
}