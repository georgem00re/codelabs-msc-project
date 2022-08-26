
const { v4 } = require("uuid");

function createRoomController(req, res) {
	res.redirect("/room/" + v4());
}

module.exports = { createRoomController }

