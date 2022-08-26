
const { getContainer } = require("../utils/getContainer.js");
const { getPort } = require("../utils/getPort.js");
const { spawnContainer } = require("../utils/spawnContainer.js");

async function rootController(req, res) {

	const labID = req.body.labID;
	const container = await getContainer(labID);

	if (container != undefined) {
		const port = await getPort(container);
		res.send({ port: port.toString() });
	} else if (container == undefined) {

		const newContainer = await spawnContainer(labID);
		const port = await getPort(newContainer);
		res.send({ port: port.toString() });
	}
}

module.exports = { rootController }