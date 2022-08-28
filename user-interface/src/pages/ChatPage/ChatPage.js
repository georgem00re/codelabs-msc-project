
import React from "react";
import styles from "./ChatPage.module.css";
import { useSelector } from "react-redux";
import MessageBubble from "../../components/MessageBubble/MessageBubble.js";
import MessageInput from "../../components/MessageInput/MessageInput.js";
import { socket } from "../../App.js";

export default function ChatPage() {

	const lab = useSelector(state => state.lab);
	const page = useSelector(state => state.page);
	const color = useSelector(state => state.color);

	const messages = lab.chat.messages.map((msg, index) => {
		return <MessageBubble key={index} author={msg.authorID} displayName={msg.displayName} timestamp={msg.timestamp} message={msg.body} backgroundColor={color.tertiaryColor} fontColor={color.secondaryColor} socketID={socket.id}/>
	});


	return (
		<div className={styles.canvas} style={{display: page == "ChatPage" ? "flex" : "none" }}>
			<div className={styles.container} style={{ backgroundColor: color.quaternaryColor }}>{messages}</div>
			<MessageInput/>
		</div>
	)
}