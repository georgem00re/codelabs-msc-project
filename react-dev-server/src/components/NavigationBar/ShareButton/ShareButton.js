
import styles from "./ShareButton.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InviteIcon from "../../../icons/InviteIcon/InviteIcon.js";
import CopyIcon from "../../../icons/CopyIcon/CopyIcon.js";


export default function ShareButton(props) {
	const colors = useSelector(state => state.color);
	const [color, setColor] = useState(colors.secondaryColor);
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const [dropdownText, setDropdownText] = useState("Copy Link to Clipboard?")

	return (
		<button onClick={() => {
			navigator.clipboard.writeText(window.location.href);
			setDropdownText("Copied Link to Clipboard!");
		}} className={styles.button} onMouseEnter={() => {
			setColor(colors.primaryColor);
			setDropdownVisible(true);
		}} onMouseLeave={() => {
			setColor(colors.secondaryColor);
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

	const colors = useSelector(state => state.color);

	return (
		<div className={styles.dropdownMenu} style={{ display: props.visible == true ? "flex" : "none", backgroundColor: colors.tertiaryColor }}>
			<CopyIcon fill={colors.secondaryColor}/>
			<h1 style={{ color: colors.secondaryColor}}>{props.text}</h1>
		</div>
	)
}
