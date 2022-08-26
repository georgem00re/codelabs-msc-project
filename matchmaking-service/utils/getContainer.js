
const { docker } = require("./dockerode.js");

async function getContainer(containerID) {
	const container = await docker.getContainer(containerID);
}

module.exports = { getContainer };