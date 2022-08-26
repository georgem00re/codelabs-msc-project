
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io")
const server = http.createServer(app);
const PORT = process.env.PORT || 7000;
const { ExpressPeerServer } = require("peer");
const { Lab } = require("./utils/Lab.js");
const { User } = require("./utils/User.js");
const { Message } = require("./utils/Message.js");

const lab = new Lab();

const io = new Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"]
	}
});

app.use("/peerjs", ExpressPeerServer(server, {
	debug: true
}))

io.on("connection", (socket) => {

	socket.on("join-lab", (peerID, displayName) => {
		const user = new User(socket.id, peerID, displayName == null ? "Anonymous" : displayName);
		lab.addUser(user);
		io.sockets.emit("update-lab", lab);
	})

	socket.on("send-message", (messageBody) => {
		const message = new Message(messageBody, lab.users[socket.id].displayName, socket.id);
		lab.chat.sendMessage(message);
		io.sockets.emit("update-lab", lab);
	})

	socket.on("code-changed", (value) => {
		lab.codeEditor.setValue(value);
		io.sockets.emit("update-lab", lab);
	})

	socket.on("mode-changed", (mode) => {
		lab.codeTerminal.setMode(mode);
		lab.codeEditor.setMode(mode);
		io.sockets.emit("update-lab", lab);
	})

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

	socket.on("toggle-video", () => { // done
		lab.users[socket.id].media.toggleVideoPause();
		io.sockets.emit("update-lab", lab);
	})

	socket.on("toggle-audio", () => { // done
		lab.users[socket.id].media.toggleAudioMute()
		io.sockets.emit("update-lab", lab);
	})

	socket.on("disconnecting", () => { // done
		lab.removeUser(socket.id);

		if (Object.keys(lab.users).length == 0) {
			process.exit();
		}
		io.sockets.emit("update-lab", lab);
	})


})

server.listen(PORT);