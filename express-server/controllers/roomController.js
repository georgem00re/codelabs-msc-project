
const ipaddr = process.env.IP_ADDRESS || "localhost";

function roomController(req, res) {
	res.redirect(`http://${ipaddr}:3000/room/` + req.params.room);
}

module.exports = { roomController }
