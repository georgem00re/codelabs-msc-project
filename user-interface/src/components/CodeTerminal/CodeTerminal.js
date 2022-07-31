
import styles from "./CodeTerminal.module.css";
import { useState } from "react";
import { primaryColour } from "../../colours.js";

export default function CodeTerminal(props) {

	const [open, setOpen] = useState(false);
	const options = props.modes.map((value, index) => {
		return <option key={index} value={value}>{value}</option>
	})

	return (
		<div className={styles.container} style={{
			height: open ? "300px" : "29px"
		}}>
			<div className={styles.header}>
				<TerminalButton onClick={() => setOpen(!open)}/>
				<div className={styles.right}>
					<RunButton onClick={() => props.onRunClicked()}/>
					<DropdownButton onChange={(e) => props.onModeChange(e.target.value)}>{options}</DropdownButton>
				</div>
			</div>
			<div className={styles.console}>
				{ props.isLoading == true ? <LoadingSpinner/> : <textarea disabled value={props.value}/> }
			</div>
		</div>
	)
}

function TerminalIcon(props) {
	return (
		<svg width="15px" height="12px" viewBox="0 0 15 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
		    <title>Combined Shape</title>
		    <g id="Components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
		        <g id="TerminalButton" transform="translate(-24.000000, -9.000000)" fill={props.fill}>
		            <path d="M39,9 L39,20.25 L24,20.25 L24,9 L39,9 Z M35.875,16.5 L30.25,16.5 L30.25,17.75 L35.875,17.75 L35.875,16.5 Z M26.282285,10.8866133 C26.0876088,10.9338013 25.9269236,11.1060924 25.8857223,11.3113054 C25.8589414,11.4429929 25.8898424,11.6185762 25.9588546,11.7283158 C25.9753351,11.7546533 26.5243428,12.3472469 27.1794439,13.0440931 L28.3691321,14.311585 L27.1712036,15.5900509 C26.0843602,16.7498292 25.9525525,16.8873998 25.9115115,16.9966848 L25.9019196,17.0265352 C25.8990396,17.0367495 25.8962603,17.0474767 25.8929325,17.0594636 C25.8362807,17.265774 25.9176533,17.5148828 26.0834886,17.6443755 C26.1782517,17.7168036 26.2462339,17.7420437 26.3677778,17.748628 C26.4934418,17.7563098 26.5799646,17.7321671 26.6747276,17.665226 C26.715929,17.6377911 27.2175551,17.1099438 28.1384047,16.1266773 C29.3914933,14.7889143 29.551811,14.6221519 29.5920288,14.5136 L29.600144,14.4870308 L29.600144,14.4870308 L29.6066325,14.4590232 C29.6077659,14.4540207 29.6089723,14.4487973 29.610322,14.4432725 C29.6298927,14.3609678 29.6298927,14.2764684 29.610322,14.1864819 C29.6077647,14.1750539 29.6057708,14.1648576 29.603774,14.1552452 L29.5972087,14.1275117 L29.5972087,14.1275117 L29.5872286,14.0993937 C29.538085,13.9859038 29.338784,13.7782507 28.1281044,12.4910057 C27.3576396,11.6712512 26.7035686,10.9831841 26.6747276,10.963431 C26.5676042,10.8877107 26.4079491,10.8558863 26.282285,10.8866133 Z" id="Combined-Shape"></path>
		        </g>
		    </g>
		</svg>
	)
}

function TerminalButton(props) {
	const [color, setColor] = useState("#B2B1AB");
	return (
		<button className={styles.terminalButton} onMouseEnter={() => setColor(primaryColour)} onMouseLeave={() => setColor("#B2B1AB")} onClick={props.onClick}>
			<TerminalIcon fill={color}/>
			<h1 style={{ color: color }}>Terminal</h1>
		</button>
	)
}

function DropdownButton(props) {
	const [color, setColor] = useState("#B2B1AB")
	return (
		<select style={{ color: color }} className={styles.dropdown} onMouseEnter={() => setColor(primaryColour)} onMouseLeave={() => setColor("#B2B1AB")} onChange={props.onChange} value={props.mode}>
			{props.children}
		</select>
	)
}

function RunButton(props) {
	const [color, setColor] = useState("#B2B1AB");
	return (
		<button className={styles.runButton} onMouseEnter={() => setColor(primaryColour)} onMouseLeave={() => setColor("#B2B1AB")} onClick={props.onClick}>
			<RunIcon fill={color}/>
		</button>
	)
}

function RunIcon(props) {
	return (
		<svg width="10px" height="10px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
		    <g id="Components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
		        <g id="RunButton" transform="translate(-9.000000, -9.000000)" fill={props.fill}>
		            <polygon id="Triangle" transform="translate(15.000000, 15.000000) rotate(90.000000) translate(-15.000000, -15.000000) " points="15 9 21 21 9 21"></polygon>
		        </g>
		    </g>
		</svg>
	)
}

function LoadingSpinner(props) {
	return (
		<div className={styles.loadingSpinner}></div>
	)
}
