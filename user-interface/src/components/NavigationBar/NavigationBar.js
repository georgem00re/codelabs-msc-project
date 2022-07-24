
import styles from "./NavigationBar.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCodePage, selectVideoPage, selectChatPage } from "../../state/actions.js";
import ShareIcon from "../../icons/ShareIcon/ShareIcon.js";
import CodeIcon from "../../icons/CodeIcon/CodeIcon.js";
import ExitIcon from "../../icons/ExitIcon/ExitIcon.js";
import VideoIcon from "../../icons/VideoIcon/VideoIcon.js";
import ChatIcon from "../../icons/ChatIcon/ChatIcon.js";
import LockIcon from "../../icons/LockIcon/LockIcon.js";
import UnlockIcon from "../../icons/UnlockIcon/UnlockIcon.js";
import { socket } from "../../utils.js";

export default function NavigationBar(props) {

	const dispatch = useDispatch();
	const page = useSelector(state => state.page);
	const room = useSelector(state => state.room);

	return (
		<nav className={styles.navbar}>
			<CodeButton selected={page == "CodePage" ? true : false} onClick={() => dispatch(selectCodePage())}/>
			<ChatButton selected={page == "ChatPage" ? true : false} onClick={() => dispatch(selectChatPage())}/>
			<VideoButton selected={page == "VideoPage" ? true : false} onClick={() => dispatch(selectVideoPage())}/>
			<ExitButton onClick={() => window.location = "http://localhost:5000/"}/>
			<ShareButton onClick={() => navigator.clipboard.writeText(window.location)}/>
			<LockButton locked={room.isLocked} onClick={ () => socket.emit("toggle-lock", room.roomID) }/>
		</nav>
	)
}

export function NavigationBarButton(props) {
	return (
		<button onClick={props.onClick} className={props.selected == true ? `${styles.button} ${styles.selected}` : styles.button} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
			{props.children}
			<h1>{props.title}</h1>
		</button>
	)
}

export function ShareButton(props) {
	const [color, setColor] = useState("#B2B1AB")
	return (
		<NavigationBarButton selected={props.selected} onMouseEnter={() => setColor("white")} onMouseLeave={() => setColor("#B2B1AB")} onClick={props.onClick} title="URL">
			<ShareIcon fill={props.selected == true ? "white" : color}/>
		</NavigationBarButton>
	)
}

export function CodeButton(props) {
	const [color, setColor] = useState("#B2B1AB")
	return (
		<NavigationBarButton selected={props.selected} onMouseEnter={() => setColor("white")} onMouseLeave={() => setColor("#B2B1AB")} onClick={props.onClick} title="Code">
			<CodeIcon fill={props.selected == true ? "white" : color}/>
		</NavigationBarButton>
	)
}

export function ExitButton(props) {
	const [color, setColor] = useState("#B2B1AB")
	return (
		<NavigationBarButton selected={props.selected} onMouseEnter={() => setColor("white")} onMouseLeave={() => setColor("#B2B1AB")} onClick={props.onClick} title="Exit">
			<ExitIcon fill={props.selected == true ? "white" : color}/>
		</NavigationBarButton>
	)
}

export function VideoButton(props) {
	const [color, setColor] = useState("#B2B1AB")
	return (
		<NavigationBarButton selected={props.selected} onMouseEnter={() => setColor("white")} onMouseLeave={() => setColor("#B2B1AB")} onClick={props.onClick} title="Video">
			<VideoIcon fill={props.selected == true ? "white" : color}/>
		</NavigationBarButton>
	)
}

export function ChatButton(props) {
	const [color, setColor] = useState("#B2B1AB")
	return (
		<NavigationBarButton selected={props.selected} onMouseEnter={() => setColor("white")} onMouseLeave={() => setColor("#B2B1AB")} onClick={props.onClick} title="Chat">
			<ChatIcon fill={props.selected == true ? "white" : color}/>
		</NavigationBarButton>
	)
}

export function LockButton(props) {
	const [color, setColor] = useState("#B2B1AB");
	return (
		<NavigationBarButton selected={props.selected} onMouseEnter={() => setColor("white")} onMouseLeave={() => setColor("#B2B1AB")} onClick={props.onClick} title="Lock">
			{ props.locked == true ? <LockIcon fill={props.selected == true ? "white" : color}/> : <UnlockIcon fill={props.selected == true ? "white" : color}/>}
		</NavigationBarButton>
	)
}

