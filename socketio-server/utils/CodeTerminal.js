
const { Code } = require("./Code.js");

class CodeTerminal extends Code {

	constructor() {
		super();
		this.isLoading = false;
		this.value = "$";
	}
	
}

module.exports = { CodeTerminal };