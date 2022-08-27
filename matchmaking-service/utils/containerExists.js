
const { docker } = require("./dockerode.js");

async function containerExists(containerID) {
	const container = docker.getContainer(containerID);
	return container.inspect().then(() => {
		return true;
	}).catch(() => {
		return false
	})
}

module.exports = { containerExists }