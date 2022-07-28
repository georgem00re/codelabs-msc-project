
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const Docker = require("dockerode")
const PORT = process.env.PORT || 4000;
const streams = require("memory-streams");

const docker = new Docker({
	socketPath: "/var/run/docker.sock"
})

app.use(bodyParser.json());

app.post("/python", (req, res) => {
	
	const output = new streams.WritableStream();
	const error = new streams.WritableStream();

	docker.run("python:latest", ["python", "-c", req.body.code], [output, error], {
		Tty: false
	}).then((data) => {
		res.send({ output: error.toString() == "" ? output.toString() : error.toString() })
		return data
	}).then((data) => {
		const container = data[1];
		return container.remove();
	}).catch((err) => {
		console.log(err)
	})
})

app.post("/javascript", (req, res) => {

	const output = new streams.WritableStream();
	const error = new streams.WritableStream();

	docker.run("node:latest", ["node", "-e", req.body.code], [output, error], {
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
})


app.listen(PORT, () => {
	console.log(`Listening on PORT ${4000}`);
});