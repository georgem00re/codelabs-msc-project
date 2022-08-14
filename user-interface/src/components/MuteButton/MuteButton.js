
import { socket } from "../../App.js";
import { useSelector } from "react-redux";
import AudioIcon from "../../icons/AudioIcon/AudioIcon.js";
import styles from "./MuteButton.module.css";

export default function MuteButton() {

	const room = useSelector(state => state.room);
	const color = useSelector(state => state.color);

	return (
		<button className={styles.muteButton} style={{
			backgroundColor: room.users[socket.id].isVideoMuted == true ? color.secondaryColor : color.tertiaryColor
		}} onClick={() => socket.emit("toggle-audio")}>
			<AudioIcon fill={room.users[socket.id].isVideoMuted == true ? color.tertiaryColor : color.secondaryColor }/>
		</button>
	)
}