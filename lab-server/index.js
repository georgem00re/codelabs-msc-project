const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io")
const server = http.createServer(app);
const PORT = process.env.PORT || 7000;
const { ExpressPeerServer } = require("peer");
const registerHandlers = require("./utils/registerHandlers.js");


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
	registerHandlers(io, socket);
})

server.listen(PORT);