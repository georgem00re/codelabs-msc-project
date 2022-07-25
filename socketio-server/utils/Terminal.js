
class Terminal {
	constructor() {
		this.isLoading = false;
		this.output = "$";
	}

	setOutput(val) {
		this.output = val;
	}
}

module.exports = { Terminal };