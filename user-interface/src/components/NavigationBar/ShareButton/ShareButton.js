
import styles from "./ShareButton.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InviteIcon from "../../../icons/InviteIcon/InviteIcon.js";
import CopyIcon from "../../../icons/CopyIcon/CopyIcon.js";


export default function ShareButton(props) {
	const primaryColour = useSelector(state => state.primaryColour);
	const secondaryColour = useSelector(state => state.secondaryColour);
	const [color, setColor] = useState(secondaryColour);
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const [dropdownText, setDropdownText] = useState("Copy Link to Clipboard?")

	return (
		<button onClick={() => {
			navigator.clipboard.writeText(window.location.href);
			setDropdownText("Copied Link to Clipboard!");
		}} className={styles.button} onMouseEnter={() => {
			setColor(primaryColour);
			setDropdownVisible(true);
		}} onMouseLeave={() => {
			setColor(secondaryColour);
			setDropdownVisible(false);
			setDropdownText("Copy Link to Clipboard?")
		}}>
			<InviteIcon fill={color}/>
			<h1 style={{ color }}>Share</h1>
			<DropdownMenu visible={dropdownVisible} text={dropdownText}/>
		</button>
	)
}

function DropdownMenu(props) {

	const secondaryColour = useSelector(state => state.secondaryColour);

	return (
		<div className={styles.dropdownMenu} style={{ display: props.visible == true ? "flex" : "none" }}>
			<CopyIcon fill={secondaryColour}/>
			<h1>{props.text}</h1>
		</div>
	)
}
