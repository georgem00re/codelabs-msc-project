
import { socket } from "../../App.js";
import { useSelector } from "react-redux";
import AudioIcon from "../../icons/AudioIcon/AudioIcon.js";
import styles from "./MuteButton.module.css";

export default function MuteButton() {

	const room = useSelector(state => state.room);
	const color = useSelector(state => state.color);

	const clickHandler = () => {
		socket.emit("toggle-audio");
	}

	const getBackgroundColor = () => {
		if (room.users[socket.id] == undefined) { return color.tertiaryColor};
		return room.users[socket.id].isVideoMuted ? color.secondaryColor : color.tertiaryColor
	}

	const getIconColor = () => {
		if (room.users[socket.id] == undefined) { return color.secondaryColor};
		return room.users[socket.id].isVideoMuted ? color.tertiaryColor : color.secondaryColor
	}

	return (
		<button className={styles.muteButton} style={{
			backgroundColor: getBackgroundColor()
		}} onClick={clickHandler}>
			<AudioIcon fill={getIconColor()}/>
		</button>
	)
}