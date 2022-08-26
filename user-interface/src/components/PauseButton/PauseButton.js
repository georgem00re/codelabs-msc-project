
import { socket } from "../../App.js";
import { useSelector } from "react-redux";
import VideoIcon from "../../icons/VideoIcon/VideoIcon.js";
import styles from "./PauseButton.module.css";

export default function PauseButton() {

	const lab = useSelector(state => state.lab);
	const color = useSelector(state => state.color);

	const clickHandler = () => {
		socket.emit("toggle-video");
	}

	const getBackgroundColor = () => {
		if (lab.users[socket.id] == undefined) { return color.tertiaryColor};
		return lab.users[socket.id].isVideoPaused ? color.secondaryColor : color.tertiaryColor
	}

	const getIconColor = () => {
		if (lab.users[socket.id] == undefined) { return color.secondaryColor};
		return lab.users[socket.id].isVideoPaused ? color.tertiaryColor : color.secondaryColor
	}

	return (
		<button className={styles.pauseButton} style={{
			backgroundColor: getBackgroundColor()
		}} onClick={clickHandler}>
			<VideoIcon fill={getIconColor()}/>
		</button>
	)
}