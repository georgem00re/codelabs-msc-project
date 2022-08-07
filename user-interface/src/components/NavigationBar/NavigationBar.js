
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
import PersonIcon from "../../icons/PersonIcon/PersonIcon.js";
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
			<UserDropdown/>
			<InviteDropdown/>
			<ExitButton onClick={() => window.location = "http://localhost:5000/"}/>
		</nav>
	)
}

export function InviteDropdown(props) {

	const [isVisible, setVisible] = useState(false);
	const [text, setText] = useState("Copy Link to Clipboard?")

	return (
		<div onMouseEnter={() => setVisible(true)} onMouseLeave={() => {
			setVisible(false);
			setText("Copy Link to Clipboard?");
		}}>
			<ShareButton onClick={() => {
				navigator.clipboard.writeText(window.location.href);
				setText("Copied Link to Clipboard!");
			}}/>
			<div className={styles.inviteDropdown} style={{ display: isVisible ? "flex" : "none" }}>
				<CopyIcon fill={lightGrey}/>
				<h1>{text}</h1>
			</div>
		</div>
	)
}

export function UserDropdown(props) {

	const [isVisible, setVisible] = useState(false);
	const room = useSelector(state => state.room);

	return (
		<div style={{ height: "100%" }} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
			<UsersButton length={Object.keys(room.users).length}/>
			<div className={styles.dropdown} style={{ display: isVisible ? "flex" : "none" }}>
				{Object.keys(room.users).map((element, index) => {
					return <DropdownCell text={element.displayName || "Anonymous"}/>
				})}
			</div>
		</div>
	)
}

export function DropdownCell(props) {
	return (
		<div className={styles.dropdownCell}>
			<PersonIcon fill={lightGrey}/>
			<h3>{props.text}</h3>
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

	return (
		<NavigationBarButton selected={props.selected} onMouseEnter={() => setColor(primaryColour)} onMouseLeave={() => setColor(lightGrey)} onClick={props.onClick} title="Share">
			<InviteIcon fill={props.selected == true ? primaryColour : color}/>
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

