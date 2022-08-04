const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const { createRoomController } = require("./controllers/createRoomController.js")
const { rootController } = require("./controllers/rootController.js")
const { roomController } = require("./controllers/roomController.js")

app.use(express.static("public"));

app.get("/", rootController);
app.get("/create-room", createRoomController);
app.get("/room/:room", roomController);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
})