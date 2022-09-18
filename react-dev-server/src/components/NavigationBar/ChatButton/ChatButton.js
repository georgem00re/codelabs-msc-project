
import styles from "./ChatButton.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChatPage } from "../../../state/actions.js";
import PropTypes from "prop-types";

export default function ChatButton(props) {
	const colors = useSelector(state => state.color);
	const [color, setColor] = useState(colors.secondaryColor);
	const page = useSelector(state => state.page);
	const dispatch = useDispatch();

	useEffect(() => {
		page == "ChatPage" ? setColor(colors.primaryColor) : setColor(colors.secondaryColor);
	}, [page])


	return (
		<button onClick={() => dispatch(selectChatPage())} className={styles.button} onMouseEnter={() => {
			if (page != "ChatPage") { setColor(colors.primaryColor) }
		}} onMouseLeave={() => {
			if (page != "ChatPage") { setColor(colors.secondaryColor) }
		}}>
			<ChatIcon fill={props.selected == true ? colors.primaryColor : color}/>
			<h1 style={{ color }}>Chat</h1>
		</button>
	)
}

ChatButton.propTypes = {
	selected: PropTypes.bool
}

function ChatIcon(props) {
	return (
		<svg width="300px" height="300px" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
    		<title>ChatIcon</title>
    		<g id="ChatIcon" stroke="none" strokeWidth="1" fill={props.fill} fillRule="evenodd">
        	<path d="M150.499665,40 C183.609579,40 214.76972,50.1630085 238.240803,68.6167166 C261.945376,87.2542464 275,112.104955 275,138.590675 C275,165.077063 261.945376,189.927772 238.240803,208.565301 C214.769049,227.019009 183.609579,237.182018 150.499665,237.182018 C147.717246,237.182018 144.892557,237.107152 142.090009,236.959426 C105.77565,256.124358 76.0701234,259 61.5340472,259 C56.4361886,259 53.5672173,258.633025 53.4477887,258.617651 C52.1307189,258.445192 51.0390874,257.514719 50.6646987,256.244678 C50.2903101,254.973967 50.7042846,253.603659 51.7194281,252.749389 C71.4459537,236.159969 75.1167071,222.239641 75.7983897,217.483 C61.0254691,208.696985 48.7397505,197.276635 40.1791322,184.352288 C30.9032839,170.347068 26,154.523016 26,138.590675 C26,112.104955 39.0546243,87.2542464 62.7591972,68.6167166 C86.2296095,50.1630085 117.38975,40 150.499665,40 Z M104,125 C97.372583,125 92,130.372583 92,137 C92,143.627417 97.372583,149 104,149 C110.627417,149 116,143.627417 116,137 C116,130.372583 110.627417,125 104,125 Z M150,125 C143.372583,125 138,130.372583 138,137 C138,143.627417 143.372583,149 150,149 C156.627417,149 162,143.627417 162,137 C162,130.372583 156.627417,125 150,125 Z M196,125 C189.372583,125 184,130.372583 184,137 C184,143.627417 189.372583,149 196,149 C202.627417,149 208,143.627417 208,137 C208,130.372583 202.627417,125 196,125 Z" id="Combined-Shape" fillRule="nonzero"></path>
    		</g>
		</svg>
	)
}

ChatIcon.propTypes = {
	fill: PropTypes.string
}