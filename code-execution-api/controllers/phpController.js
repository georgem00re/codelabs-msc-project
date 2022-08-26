
const streams = require("memory-streams");
const { docker } = require("../utils/dockerode.js");

function phpController(req, res) {
	const output = new streams.WritableStream();
	const error = new streams.WritableStream();

	docker.run("php:latest", ["php", "-r", req.body.code], [output, error], {
		Tty: false
	}).then((data) => {
		res.send({ output: error.toString() == "" ? output.toString() : error.toString() });
		return data;
	}).then((data) => {
		const container = data[1];
		return container.remove();
	}).catch((err) => {
		console.log(err);
	})
}


module.exports = { phpController }