
const ipaddr = process.env.IP_ADDRESS || "localhost";

function labController(req, res) {
	res.redirect(`http://${ipaddr}:3000/lab/` + req.params.lab);
}

module.exports = { labController }
