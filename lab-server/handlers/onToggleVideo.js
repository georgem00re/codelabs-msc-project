
const { lab } = require("../state/lab.js");

module.exports = function onToggleVideo(io, socket) {
	socket.on("toggle-video", () => {
		lab.users[socket.id].media.toggleVideoPause();
		io.sockets.emit("update-lab", lab);
	})
}