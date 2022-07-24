
import styles from "./CodeTerminal.module.css";
import { useState } from "react";

export default function CodeTerminal(props) {

	const [open, setOpen] = useState(false);
	const options = props.modes.map((value, index) => {
		return <option key={index} value={value}>{value}</option>
	})

	return (
		<div className={styles.container} style={{
			height: open == true ? "200px" : "25px"
		}}>
			<div className={styles.footer}>
				<h1>Line {props.cursorLine}, Column {props.cursorColumn}</h1>
				<button onClick={() => setOpen(!open)}>{"Terminal </>"}</button>
				<button onClick={() => props.onRunClicked()}>RUN</button>
				<select onChange={(e) => props.onModeChange(e.target.value)} value={props.mode}>{options}</select>
			</div>
			<textarea disabled value={props.isLoading == true ? "Loading..." : "$"}/>
		</div>
	)
}