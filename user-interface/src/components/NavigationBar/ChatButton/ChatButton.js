
import styles from "./ChatButton.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChatPage } from "../../../state/actions.js";
import ChatIcon from "../../../icons/ChatIcon/ChatIcon.js";

export default function ChatButton(props) {
	const primaryColour = useSelector(state => state.primaryColour);
	const secondaryColour = useSelector(state => state.secondaryColour);
	const [color, setColor] = useState(secondaryColour);
	const page = useSelector(state => state.page);
	const dispatch = useDispatch();

	useEffect(() => {
		page == "ChatPage" ? setColor(primaryColour) : setColor(secondaryColour);
	}, [page])


	return (
		<button onClick={() => dispatch(selectChatPage())} className={styles.button} onMouseEnter={() => {
			if (page != "ChatPage") { setColor(primaryColour) }
		}} onMouseLeave={() => {
			if (page != "ChatPage") { setColor(secondaryColour) }
		}}>
			<ChatIcon fill={props.selected == true ? primaryColour : color}/>
			<h1 style={{ color }}>Chat</h1>
		</button>
	)
}