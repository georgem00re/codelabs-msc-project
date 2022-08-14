
import { socket } from "../../App.js";
import { useSelector } from "react-redux";
import VideoIcon from "../../icons/VideoIcon/VideoIcon.js";
import styles from "./PauseButton.module.css";

export default function PauseButton() {

	const room = useSelector(state => state.room);
	const color = useSelector(state => state.color);

	return (
		<button className={styles.pauseButton} style={{
			backgroundColor: room.users[socket.id].isVideoPaused == true ? color.secondaryColor : color.tertiaryColor
		}} onClick={() => {socket.emit("toggle-video");}}>
			<VideoIcon fill={room.users[socket.id].isVideoPaused == true ? color.tertiaryColor : color.secondaryColor }/>
		</button>
	)
}