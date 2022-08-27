
const { getPort } = require("../utils/getPort.js");
const { spawnContainer } = require("../utils/spawnContainer.js");
const { containerExists } = require("../utils/containerExists.js");

async function rootController(req, res) {

	const labID = req.body.labID;
	const containerDoesExist = await containerExists(labID);

	if (containerDoesExist) {
		const port = await getPort(labID);
		res.send({ port: port.toString() });
	} else if (!containerDoesExist) {
		await spawnContainer(labID);
		const port = await getPort(labID);
		res.send({ port: port.toString() });
	}

}

module.exports = { rootController }