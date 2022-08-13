
import React from "react";
import styles from "./ChatPage.module.css";
import { useSelector } from "react-redux";
import MessageBubble from "../../components/MessageBubble/MessageBubble.js";
import MessageInput from "../../components/MessageInput/MessageInput.js";

export default function ChatPage() {

	const room = useSelector(state => state.room);
	const page = useSelector(state => state.page);
	const color = useSelector(state => state.color);

	const messages = room.chat.messages.map((msg, index) => {
		const displayName = msg.name;
		return <MessageBubble key={index} author={msg.author} displayName={displayName} timestamp={msg.timestamp} message={msg.body}/>
	});


	return (
		<div className={styles.canvas} style={{display: page == "ChatPage" ? "flex" : "none" }}>
			<div className={styles.container} style={{ backgroundColor: color.quaternaryColor }}>{messages}</div>
			<MessageInput/>
		</div>
	)
}