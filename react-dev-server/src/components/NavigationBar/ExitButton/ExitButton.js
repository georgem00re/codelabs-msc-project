
import styles from "./ExitButton.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCodePage } from "../../../state/actions.js";

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

function ExitIcon(props) {
	return (
		<svg width="300px" height="300px" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<title>ExitIcon</title>
			<g id="ExitIcon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			    <path d="M227.799219,186 L227.799219,154.666667 L149,154.666667 L149,123.333333 L227.799219,123.333333 L227.799219,92 L275,138.804777 L227.799219,186 Z M212,169.478516 L212,232.222656 L133.747087,232.222656 L133.747087,279 L40,232.173828 L40,29 L212,29 L212,107.173828 L196.505826,107.173828 L196.505826,44.4785156 L71.3793691,44.4785156 L134.186985,75.8261719 L134.186985,216.304688 L196.994601,216.304688 L196.994601,169.478516 L212,169.478516 Z" id="XMLID_5_" fill={props.fill} fillRule="nonzero"></path>
			</g>
		</svg>
	)
}