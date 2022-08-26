
const { lab } = require("../state/lab.js");

module.exports = function onToggleAudio(io, socket) {
	socket.on("toggle-audio", () => {
		lab.users[socket.id].media.toggleAudioMute()
		io.sockets.emit("update-lab", lab);
	})
}