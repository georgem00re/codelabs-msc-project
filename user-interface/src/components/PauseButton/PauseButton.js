
import VideoIcon from "../../icons/VideoIcon/VideoIcon.js";
import styles from "./PauseButton.module.css";

export default function PauseButton(props) {
	return (
		<button className={styles.pauseButton} style={{ backgroundColor: props.backgroundColor }} onClick={props.onClick}>
			<VideoIcon fill={props.iconColor}/>
		</button>
	)
}