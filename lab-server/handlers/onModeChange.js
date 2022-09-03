
const { lab } = require("../state/lab.js");

module.exports = function onModeChange(io, socket) {
	socket.on("mode-change", (mode) => {
		lab.codeTerminal.setMode(mode);
		lab.codeEditor.setMode(mode);
		io.sockets.emit("update-lab", lab);
	})
}