
const { Code } = require("./Code.js");

class CodeEditor extends Code {

	constructor() {
		super();
		this.value = "Testing!!"
	}

}

module.exports = { CodeEditor };