const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const { createLabController } = require("./controllers/createLabController.js")
const { rootController } = require("./controllers/rootController.js")
const { labController } = require("./controllers/labController.js")

app.use(cors());
app.use(express.static("public"));

app.get("/", rootController);
app.get("/create-lab", createLabController);
app.get("/lab/:lab", labController);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
})