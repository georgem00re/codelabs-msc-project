
const path = require("path");

function rootController(req, res) {
	res.sendFile(path.join(__dirname, "..", "views", "landing.html"));
}

module.exports = { rootController }