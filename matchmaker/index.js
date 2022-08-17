
const express = require("express");
const app = express();
const PORT = process.env.PORT || 10000;
const bodyParser = require("body-parser");
const Docker = require("dockerode");
const cors = require("cors");

const docker = new Docker({
	socketPath: "/var/run/docker.sock"
})

async function spawnContainer(roomID) {
	const options = { Image: "codelabs-socketio-server", name: roomID ,HostConfig: { PortBindings: { "7000/tcp": [{ HostPort: "0" }] }, NetworkMode: "bridge" }, ExposedPorts: { "7000/tcp": {} } }
	const container = await docker.createContainer(options);
	const containerID = container.id;
	await container.start();
	const inspect = await container.inspect();
	const port = inspect.NetworkSettings.Ports["7000/tcp"][0].HostPort;
	return port;
}

app.use(bodyParser.json());
app.use(cors());

app.post("/", (req,res) => {

	const roomID = req.body.roomID;

	docker.listContainers({ all: false })
		.then((containers) => {
			return containers.filter((container) => {
				return container.Names[0] == "/" + roomID;
			})
		}).then((containers) => {
			if (containers.length == 0) {
				spawnContainer(roomID).then((port) => {
					res.send({ port: port.toString() })
				})
			} else if (containers.length > 0) {
				res.send({ port: containers[0].Ports[0].PublicPort })
			}
		}).catch((err) => {
			res.send(err);
		})

})


app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
})