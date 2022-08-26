
const { v4 } = require("uuid");

function createLabController(req, res) {
	res.redirect("/lab/" + v4());
}

module.exports = { createLabController }

