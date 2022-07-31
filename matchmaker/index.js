
const express = require("express");
const app = express();
const PORT = process.env.PORT || 10000;
const bodyParser = require("body-parser");
const Docker = require("dockerode");
const cors = require("cors");
const rooms = {};

const docker = new Docker({
	socketPath: "/var/run/docker.sock"
})

async function spawnContainer() {
	const options = { Image: "codelabs-socketio-server", HostConfig: { PortBindings: { "7000/tcp": [{ HostPort: "0" }] }}, ExposedPorts: { "7000/tcp": {} } }
	const container = await docker.createContainer(options);
	const containerID = container.id;
	await container.start();
	const containers = await docker.listContainers({ all: false });
	return containers.find((element) => { return element.Id == containerID; }).Ports[0].PublicPort;
}

app.use(bodyParser.json());
app.use(cors());

app.post("/", (req,res) => {

	const roomID = req.body.roomID;

	if (rooms[roomID] != undefined) { 
		res.send({ port: rooms[req.body.roomID].port.toString() })
		return;
	}

	spawnContainer()
		.then((port) => {
			rooms[roomID] = { port: port }
			res.send({ port: port.toString() })
		}).catch((err) => {
			res.send(err);
		})
})


app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
})