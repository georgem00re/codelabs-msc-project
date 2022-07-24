
import React from "react";
import styles from "./ChatPage.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { socket } from "../../utils.js"
import { useSelector } from "react-redux";
import MessageBubble from "../../components/MessageBubble/MessageBubble.js";

export default function ChatPage() {

	const [message, updateMessage] = useState("");
	const room = useSelector(state => state.room);
	const page = useSelector(state => state.page);

	const messages = room.chat.messages.map((msg, index) => {
		const displayName = msg.name;
		return <MessageBubble key={index} author={msg.author} displayName={displayName} timestamp={msg.timestamp} message={msg.body}/>
	});

	const sendMessage = (msg) => {
		socket.emit("send-message", msg, room.roomID);
	}

	return (
		<div className={styles.canvas} style={{
			display: page == "ChatPage" ? "flex" : "none"
		}}>
			<div className={styles.container}>{messages}</div>
			<div className={styles.footer}>
				<input value={message} onChange={(e) => updateMessage(e.target.value)} type="text" placeholder="Type your message..."/>
				<button onClick={() => {sendMessage(message); updateMessage("");}}>
					<svg width="300px" height="300px" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
   						<title>SendIcon</title>
					    <g id="SendIcon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					        <polygon id="Path" fill="#B3B1AC" fillRule="nonzero" points="44 254.846939 65.4304082 159.546418 192.513163 148.998552 192.534898 147.715409 65.6912245 140.603755 46.8255102 45.8469388 257 147.497927"></polygon>
					    </g>
					</svg>
				</button>
			</div>
		</div>
	)
}

ChatPage.propTypes = {
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			body: PropTypes.string,
			author: PropTypes.bool
		})
	)
}