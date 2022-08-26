
import styles from "./CodePage.module.css";
import { socket } from "../../App.js";
import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import CodeTerminal from "../../components/CodeTerminal/CodeTerminal.js";
import CodeEditor from "../../components/CodeEditor/CodeEditor.js";

export default function CodePage(props) {

	const page = useSelector(state => state.page);
	const lab = useSelector(state => state.lab);
	const [cursor, setCursor] = useState([1,1]);

	return (
		<div className={styles.canvas} style={{
			display: page == "CodePage" ? "flex" : "none"
		}}>
			<CodeEditor onCursorChange={(line, column) => setCursor([line, column])}/>
			<CodeTerminal value={lab.codeTerminal.value} isLoading={lab.codeTerminal.isLoading} onRunClicked={() => socket.emit("run-code")} onModeChange={(val) => socket.emit("mode-changed", val)} modes={lab.codeTerminal.modes} cursorLine={cursor[0]} cursorColumn={cursor[1]}/>
		</div>

	)
}



