
import styles from "./CodePage.module.css";
import { socket } from "../../utils.js";
import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import CodeTerminal from "../../components/CodeTerminal/CodeTerminal.js";
import CodeEditor from "../../components/CodeEditor/CodeEditor.js";

export default function CodePage(props) {

	const page = useSelector(state => state.page);
	const room = useSelector(state => state.room);
	const [cursor, setCursor] = useState([1,1]);

	return (
		<div className={styles.canvas} style={{
			display: page == "CodePage" ? "flex" : "none"
		}}>
			<CodeEditor onCursorChange={(line, column) => setCursor([line, column])}/>
			<CodeTerminal value={room.terminal.output} isLoading={room.terminal.isLoading} onRunClicked={() => socket.emit("run-code", room.roomID)} onModeChange={(val) => socket.emit("mode-changed", val, room.roomID)} modes={room.textEditor.modes} cursorLine={cursor[0]} cursorColumn={cursor[1]}/>
		</div>

	)
}



