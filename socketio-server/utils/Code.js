
class Code {
	constructor() {
		this.mode = "javascript";
		this.modes = ["javascript", "python", "ruby"];
	}

	setMode(mode) {
		this.mode = mode;
	}

	setValue(value) {
		this.value = value;
	}
}

module.exports = { Code };