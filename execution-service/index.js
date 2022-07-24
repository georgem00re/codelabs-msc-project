
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;

app.post("/python", (req, res) => {
	const scriptID = v4();
	fs.writeFileSync(`./scripts/${scriptID}.js`, req.body.code);
	const result = shell.exec(`docker run --rm -v "$PWD"/scripts/${scriptID}.js:/index.js node node /index.js`)
	const output = result.stdout;
	const error = result.stderr;
	fs.unlinkSync(`./scripts/${scriptID}.js`);
	res.send({ output, error });
})

app.get("/", (req, res) => {
	res.send("Testing!");
})

app.listen(PORT, () => {
	console.log(`Listening on PORT ${4000}`);
})