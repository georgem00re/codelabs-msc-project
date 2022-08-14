
class TextEditor {
	constructor(value) {
		this.value = value
		this.mode = "javascript";
		this.modes = ["javascript", "python", "ruby", "java", "php"];
	}
}

module.exports = { TextEditor };