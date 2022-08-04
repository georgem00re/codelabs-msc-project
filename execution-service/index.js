
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
const { javascriptController } = require("./controllers/javascriptController.js");
const { pythonController } = require("./controllers/pythonController.js");

app.use(bodyParser.json());

app.post("/python", pythonController);
app.post("/javascript", javascriptController);

app.listen(PORT, () => {
	console.log(`Listening on PORT ${4000}`);
});