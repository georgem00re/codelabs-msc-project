
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/keymap/sublime";
import "codemirror/theme/material-darker.css";
import "codemirror/theme/ttcn.css";
import "codemirror/mode/ruby/ruby";
import "codemirror/mode/php/php";
import "./CodeMirror.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { socket } from "../../App.js";

export default function CodeEditor(props) {

	const room = useSelector(state => state.room);
	const page = useSelector(state => state.page);

	useEffect(() => {
		const editor = CodeMirror.fromTextArea(document.getElementById("codemirror"), {
			lineNumbers: true,
			theme: "material-darker",
			keyMap: "sublime",
			mode: room.textEditor.mode
		})
		editor.setValue(room != null ? room.textEditor.value : "");

		editor.on("change", (instance, changes) => {
			const { origin } = changes;
			if (origin !== "setValue") {
				socket.emit("code-changed", instance.getValue());
			}
		})

		editor.on("cursorActivity", (instance) => {
			const cursor = editor.getCursor();
			const line = cursor.line + 1;
			const column = cursor.ch + 1;
			props.onCursorChange(line, column);
		})

		socket.on("update-room", (rm) => {
			const cursor = editor.getCursor();
			editor.setValue(rm.textEditor.value);
			editor.setOption("mode", rm.textEditor.mode);
			editor.setCursor(cursor);
		})
	},[])

	return <textarea id="codemirror"/>
}