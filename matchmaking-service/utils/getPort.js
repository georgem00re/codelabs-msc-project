
const { docker } = require("./dockerode.js");

async function getPort(containerID) {
	const container = docker.getContainer(containerID);
	const inspect = await container.inspect();
	const port = inspect.NetworkSettings.Ports["7000/tcp"][0].HostPort;
	return port;
}

module.exports = { getPort };