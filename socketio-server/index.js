
const { createServer } = require("http");
const { Server } = require("socket.io")
const httpServer = createServer();
const PORT = process.env.PORT || 7000;
const { Room } = require("./utils/Room.js");
const { User } = require("./utils/User.js");
const { Message } = require("./utils/Message.js");
const rooms = {};

const io = new Server(httpServer, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"]
	}
});

io.on("connection", (socket) => {

	const user = new User(socket.id);

	socket.on("join-room", (roomID, peerID, nickname) => {
		user.setPeerID(peerID);
		user.setDisplayName( nickname == null ? "Anonymous" : nickname )
		if (rooms[roomID] == undefined) {
			const room = new Room(roomID);
			room.addUser(user);
			rooms[roomID] = room;
		} else if (rooms[roomID] != undefined) {
			rooms[roomID].addUser(user);
		}
		socket.join(roomID);
		io.to(roomID).emit("update-room", rooms[roomID]);
	})

	socket.on("send-message", (msg, roomID) => {
		const message = new Message(msg, socket.id, user.displayName);
		rooms[roomID].chat.addMessage(message);
		io.to(roomID).emit("update-room", rooms[roomID]);
	})

	socket.on("mode-changed", (mode, roomID) => {
		rooms[roomID].textEditor.mode = mode;
		io.to(roomID).emit("update-room", rooms[roomID]);
	})

	socket.on("code-changed", (val, roomID) => {
		rooms[roomID].textEditor.value = val;
		io.to(roomID).emit("update-room", rooms[roomID]);
	})

	socket.on("toggle-lock", (roomID) => {
		rooms[roomID].toggleLock();
		io.to(roomID).emit("update-room", rooms[roomID]);
	})

	socket.on("run-code", (roomID) => {

		rooms[roomID].terminal.isLoading = true;
		io.to(roomID).emit("update-room", rooms[roomID]);

		fetch(`http://execution-service:4000/${rooms[roomID].textEditor.mode}`, { 
			method: "POST", 
			headers: { "Content-Type": "application/json" }, 
			body: JSON.stringify({ code: rooms[roomID].textEditor.value }),
			keepalive: true
		}).then((res) => {
			return res.json();
		}).then((data) => {
			rooms[roomID].terminal.isLoading = false;
			rooms[roomID].terminal.output = data.output;
			io.to(roomID).emit("update-room", rooms[roomID]);
		}).catch((err) => {
			console.log(err);
			rooms[roomID].terminal.isLoading = false;
			rooms[roomID].terminal.output = err.message;
			io.to(roomID).emit("update-room", rooms[roomID]);
		})
	})

	socket.on("disconnecting", () => {
		const roomID = Array.from(socket.rooms).filter(item => item != socket.id)[0];
		if (rooms[roomID] !== undefined) { rooms[roomID].removeUser(user.socketID) };
		io.to(roomID).emit("update-room", rooms[roomID]);
	})

})

httpServer.listen(PORT);