
const { lab } = require("../state/lab.js");

module.exports = function onCodeChange(io, socket) {
	socket.on("code-change", (value) => {
		lab.codeEditor.setValue(value);
		io.sockets.emit("update-lab", lab);
	})
}