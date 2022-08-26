
const { docker } = require("./dockerode.js");

async function spawnContainer(labID) {
	const options = { Image: "codelabs-socketio-server", name: labID ,HostConfig: { PortBindings: { "7000/tcp": [{ HostPort: "0" }] }, NetworkMode: "bridge" }, ExposedPorts: { "7000/tcp": {} } }
	const container = await docker.createContainer(options);
	const containerID = container.id;
	await container.start();
	return container;
}

module.exports = { spawnContainer };