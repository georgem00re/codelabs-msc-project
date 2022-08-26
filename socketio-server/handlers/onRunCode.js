
const { lab } = require("../state/lab.js");

module.exports = function onRunCode(io, socket) {

	socket.on("run-code", () => {
		lab.codeTerminal.isLoading = true;
		io.sockets.emit("update-lab", lab);
		fetch(`http://172.17.0.1:4000/${lab.codeTerminal.mode}`, { 
			method: "POST", 
			headers: { "Content-Type": "application/json" }, 
			body: JSON.stringify({ code: lab.codeEditor.value }),
			keepalive: true
		}).then((res) => {
			return res.json();
		}).then((data) => {
			lab.codeTerminal.isLoading = false;
			lab.codeTerminal.value = data.output;
			io.sockets.emit("update-lab", lab);
		}).catch((err) => {
			lab.codeTerminal.isLoading = false;
			lab.codeTerminal.value = err.message;
			io.sockets.emit("update-lab", lab);
		})
	})
	
}