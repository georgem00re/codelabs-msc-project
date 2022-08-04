
function roomController(req, res) {
	res.redirect("http://localhost:3000/room/" + req.params.room);
}

module.exports = { roomController }
