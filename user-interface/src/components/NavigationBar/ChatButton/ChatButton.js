
import styles from "./ChatButton.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChatPage } from "../../../state/actions.js";
import ChatIcon from "../../../icons/ChatIcon/ChatIcon.js";

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