
class TextEditor {
	constructor(value) {
		this.value = value
		this.mode = "javascript";
		this.modes = ["javascript", "python"]
	}
}

module.exports = { TextEditor };