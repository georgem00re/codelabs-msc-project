
import { socket } from "../../App.js";
import { useSelector } from "react-redux";
import VideoIcon from "../../icons/VideoIcon/VideoIcon.js";
import styles from "./PauseButton.module.css";

export default function PauseButton() {

	const room = useSelector(state => state.room);
	const color = useSelector(state => state.color);

	const clickHandler = () => {
		socket.emit("toggle-video");
	}

	const getBackgroundColor = () => {
		if (room.users[socket.id] == undefined) { return color.tertiaryColor};
		return room.users[socket.id].isVideoPaused ? color.secondaryColor : color.tertiaryColor
	}

	const getIconColor = () => {
		if (room.users[socket.id] == undefined) { return color.secondaryColor};
		return room.users[socket.id].isVideoPaused ? color.tertiaryColor : color.secondaryColor
	}

	return (
		<button className={styles.pauseButton} style={{
			backgroundColor: getBackgroundColor()
		}} onClick={clickHandler}>
			<VideoIcon fill={getIconColor()}/>
		</button>
	)
}