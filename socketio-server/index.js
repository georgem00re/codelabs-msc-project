
const { createServer } = require("http");
const { Server } = require("socket.io")
const httpServer = createServer();
const PORT = process.env.PORT || 7000;
const { Room } = require("./utils/Room.js");
const { User } = require("./utils/User.js");
const { Message } = require("./utils/Message.js");
const room = new Room();
const roomID = process.env.ROOM_ID;

const io = new Server(httpServer, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"]
	}
});

io.on("connection", (socket) => {

	const user = new User(socket.id);

	socket.on("join-room", (peerID, nickname) => {
		user.setPeerID(peerID);
		user.setDisplayName( nickname == null ? "Anonymous" : nickname )
		room.addUser(user);
		io.sockets.emit("update-room", room);
	})

	socket.on("send-message", (msg) => {
		const message = new Message(msg, socket.id, user.displayName);
		room.chat.addMessage(message);
		io.sockets.emit("update-room", room);
	})

	socket.on("mode-changed", (mode) => {
		room.textEditor.mode = mode;
		io.sockets.emit("update-room", room);
	})

	socket.on("code-changed", (value) => {
		room.textEditor.value = value;
		io.sockets.emit("update-room", room);
	})

	socket.on("run-code", () => {

		room.terminal.isLoading = true;
		io.sockets.emit("update-room", room);

		fetch(`http://172.17.0.1:4000/${room.textEditor.mode}`, { 
			method: "POST", 
			headers: { "Content-Type": "application/json" }, 
			body: JSON.stringify({ code: room.textEditor.value }),
			keepalive: true
		}).then((res) => {
			return res.json();
		}).then((data) => {
			room.terminal.isLoading = false;
			room.terminal.output = data.output;
			io.sockets.emit("update-room", room);
		}).catch((err) => {
			console.log(err);
			room.terminal.isLoading = false;
			room.terminal.output = err.message;
			io.sockets.emit("update-room", room);
		})
	})

	socket.on("disconnecting", () => {
		room.removeUser(user.socketID);

		if (Object.keys(room.users).length == 0) {
			process.exit();
		}
		io.sockets.emit("update-room", room);
	})

})

httpServer.listen(PORT);