
const { getContainer } = require("../utils/getContainer.js");
const { getPort } = require("../utils/getPort.js");
const { spawnContainer } = require("../utils/spawnContainer.js");

async function rootController(req, res) {

	const roomID = req.body.roomID;
	const container = await getContainer(roomID);

	if (container != undefined) {
		const port = await getPort(container);
		res.send({ port: port.toString() });
	} else if (container == undefined) {

		const newContainer = await spawnContainer(roomID);
		const port = await getPort(newContainer);
		res.send({ port: port.toString() });
	}
}

module.exports = { rootController }