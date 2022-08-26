
const streams = require("memory-streams");
const { docker } = require("../utils/dockerode.js");

function javaController(req, res) {
	const output = new streams.WritableStream();
	const error = new streams.WritableStream();

	const command = `touch Main.java && echo ${req.body.code} >> Main.java && javac Main.java && java Main`;

	docker.run("openjdk:latest", ["sh", "-c", command], [output, error], {
		Tty: false
	}).then((data) => {
		res.send({ output: error.toString() == "" ? output.toString() : error.toString() });
		return data
	}).then((data) => {
		const container = data[1];
		return container.remove();
	}).catch((err) => {
		console.log(err)
	})
}

module.exports = { javaController };