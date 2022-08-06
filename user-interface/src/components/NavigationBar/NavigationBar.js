
import styles from "./NavigationBar.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCodePage, selectVideoPage, selectChatPage } from "../../state/actions.js";
import CopyIcon from "../../icons/CopyIcon/CopyIcon.js";
import CodeIcon from "../../icons/CodeIcon/CodeIcon.js";
import ExitIcon from "../../icons/ExitIcon/ExitIcon.js";
import VideoIcon from "../../icons/VideoIcon/VideoIcon.js";
import ChatIcon from "../../icons/ChatIcon/ChatIcon.js";
import GroupIcon from "../../icons/GroupIcon/GroupIcon.js";
import TickIcon from "../../icons/TickIcon/TickIcon.js";
import InviteIcon from "../../icons/InviteIcon/InviteIcon.js";
import { socket } from "../../App.js";
import { lightGrey, primaryColour } from "../../colours.js";

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
			<ShareButton/>
			<UserDropdown users={Object.keys(room.users).map((user, index) => {
				return <h1 key={index}>{user.displayName || "Anonymous"}</h1>
			})}/>
		</nav>
	)
}

export function UserDropdown(props) {

	const [isVisible, setVisible] = useState(false);

	return (
		<div className={styles.dropdownContainer} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
			<UsersButton length={props.users.length}/>
			<div className={styles.dropdown} style={{ display: isVisible ? "flex" : "none" }}>
				{props.users.map((element) => {
					return <h1>{element}</h1>
				})}
			</div>
		</div>
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
	const [color, setColor] = useState(lightGrey);
	const [text, setText] = useState("Invite");
	const [icon, setIcon] = useState("InviteIcon");

	const currentIcon = icon == "InviteIcon" ? <InviteIcon fill={props.selected == true ? primaryColour : color}/> : icon == "CopyIcon" ?  <CopyIcon fill={props.selected == true ? primaryColour : color}/> : <TickIcon fill={props.selected == true ? primaryColour : color}/>

	return (
		<NavigationBarButton selected={props.selected} onMouseEnter={() => {
			setColor(primaryColour);
			setText("Copy URL");
			setIcon("CopyIcon");
		}} onMouseLeave={() => {
			setColor(lightGrey)
			setText("Invite");
			setIcon("InviteIcon");
		}} onClick={() => {
			setText("Copied!");
			setIcon("TickIcon");
			navigator.clipboard.writeText(window.location)
		}} title={text}>
			{currentIcon}
		</NavigationBarButton>
	)
}

export function CodeButton(props) {
	const [color, setColor] = useState(lightGrey)
	return (
		<NavigationBarButton selected={props.selected} onMouseEnter={() => setColor(primaryColour)} onMouseLeave={() => setColor(lightGrey)} onClick={props.onClick} title="Code">
			<CodeIcon fill={props.selected == true ? primaryColour : color}/>
		</NavigationBarButton>
	)
}

export function ExitButton(props) {
	const [color, setColor] = useState(lightGrey)
	return (
		<NavigationBarButton selected={props.selected} onMouseEnter={() => setColor(primaryColour)} onMouseLeave={() => setColor(lightGrey)} onClick={props.onClick} title="Exit">
			<ExitIcon fill={props.selected == true ? primaryColour : color}/>
		</NavigationBarButton>
	)
}

export function VideoButton(props) {
	const [color, setColor] = useState(lightGrey)
	return (
		<NavigationBarButton selected={props.selected} onMouseEnter={() => setColor(primaryColour)} onMouseLeave={() => setColor(lightGrey)} onClick={props.onClick} title="Video">
			<VideoIcon fill={props.selected == true ? primaryColour : color}/>
		</NavigationBarButton>
	)
}

export function ChatButton(props) {
	const [color, setColor] = useState(lightGrey)
	return (
		<NavigationBarButton selected={props.selected} onMouseEnter={() => setColor(primaryColour)} onMouseLeave={() => setColor(lightGrey)} onClick={props.onClick} title="Chat">
			<ChatIcon fill={props.selected == true ? primaryColour : color}/>
		</NavigationBarButton>
	)
}

export function UsersButton(props) {
	const [color, setColor] = useState(lightGrey)
	return (
		<NavigationBarButton selected={props.selected} onMouseEnter={() => setColor(primaryColour)} onMouseLeave={() => setColor(lightGrey)} onClick={props.onClick} title="Users">
			<GroupIcon fill={props.selected == true ? primaryColour : color}/>
			<h2 className={styles.number} style={{ color }}>{props.length}</h2>
		</NavigationBarButton>
	)
}

