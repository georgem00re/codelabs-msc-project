
import styles from "./ExitButton.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCodePage } from "../../../state/actions.js";
import ExitIcon from "../../../icons/ExitIcon/ExitIcon.js";

export default function ExitButton(props) {
	const primaryColour = useSelector(state => state.primaryColour);
	const secondaryColour = useSelector(state => state.secondaryColour);
	const [color, setColor] = useState(secondaryColour);

	return (
		<button onClick={() => window.location = "http://localhost:5000/"} className={styles.button} onMouseEnter={() => {
			setColor(primaryColour);
		}} onMouseLeave={() => {
			setColor(secondaryColour);
		}}>
			<ExitIcon fill={color}/>
			<h1 style={{ color }}>Exit</h1>
		</button>
	)
}