const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const { v4 } = require("uuid");

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "landing.html"));
})

app.get("/create-room", (req, res) => {
	res.redirect("/room/" + v4());
})

app.get("/room/:room", (req, res) => {
	res.redirect("http://localhost:3000/room/" + req.params.room);
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
})