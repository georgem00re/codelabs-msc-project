
import styles from "./ExitButton.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCodePage } from "../../../state/actions.js";
import ExitIcon from "../../../icons/ExitIcon/ExitIcon.js";

export default function ExitButton(props) {
	const colors = useSelector(state => state.color);
	const [color, setColor] = useState(colors.secondaryColor);

	return (
		<button onClick={() => window.location = "http://localhost:5000/"} className={styles.button} onMouseEnter={() => {
			setColor(colors.primaryColor);
		}} onMouseLeave={() => {
			setColor(colors.secondaryColor);
		}}>
			<ExitIcon fill={color}/>
			<h1 style={{ color }}>Exit</h1>
		</button>
	)
}