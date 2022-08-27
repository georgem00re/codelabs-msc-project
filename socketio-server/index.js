const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io")
const server = http.createServer(app);
const PORT = process.env.PORT || 7000;
const { ExpressPeerServer } = require("peer");
const onCodeChange = require("./handlers/onCodeChange.js");
const onDisconnecting = require("./handlers/onDisconnecting.js");
const onJoinLab = require("./handlers/onJoinLab.js");
const onModeChange = require("./handlers/onModeChange.js");
const onRunCode = require("./handlers/onRunCode.js");
const onSendMessage = require("./handlers/onSendMessage.js");
const onToggleAudio = require("./handlers/onToggleAudio.js");
const onToggleVideo = require("./handlers/onToggleVideo.js");

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
	onCodeChange(io, socket);
	onDisconnecting(io, socket);
	onJoinLab(io, socket);
	onModeChange(io, socket);
	onRunCode(io, socket);
	onSendMessage(io, socket);
	onToggleAudio(io, socket);
	onToggleVideo(io, socket);
})

server.listen(PORT);