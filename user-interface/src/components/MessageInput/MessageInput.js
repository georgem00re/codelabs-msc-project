
import styles from "./MessageInput.module.css";
import { useSelector } from "react-redux";
import { socket } from "../../App.js";
import { useState } from "react";

export default function MessageInput() {

	const color = useSelector(state => state.color);
	const [message, updateMessage] = useState("");

	const sendMessage = (msg) => {
		socket.emit("send-message", msg);
	}

	return (
		<div className={styles.footer} style={{ backgroundColor: color.tertiaryColor}}>
			<input value={message} onChange={(e) => updateMessage(e.target.value)} type="text" placeholder="Type your message..." style={{ backgroundColor: color.quaternaryColor }}/>
			<button onClick={() => {
				sendMessage(message); updateMessage("");
			}}>
				<svg width="300px" height="300px" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
						<title>SendIcon</title>
				    <g id="SendIcon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				        <polygon id="Path" fill={color.secondaryColor} fillRule="nonzero" points="44 254.846939 65.4304082 159.546418 192.513163 148.998552 192.534898 147.715409 65.6912245 140.603755 46.8255102 45.8469388 257 147.497927"></polygon>
				    </g>
				</svg>
			</button>
		</div>
	)
}