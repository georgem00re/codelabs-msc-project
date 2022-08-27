
const express = require("express");
const app = express();
const PORT = process.env.PORT || 10000;
const bodyParser = require("body-parser");
const cors = require("cors");
const { rootController } = require("./controllers/rootController.js");

app.use(bodyParser.json());
app.use(cors());
app.post("/", rootController)

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
})

module.exports = { app };