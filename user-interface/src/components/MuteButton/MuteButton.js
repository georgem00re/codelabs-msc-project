
import AudioIcon from "../../icons/AudioIcon/AudioIcon.js";
import styles from "./MuteButton.module.css";

export default function MuteButton(props) {

	return (
		<button className={styles.muteButton} style={{ backgroundColor: props.backgroundColor }} onClick={props.onClick}>
			<AudioIcon fill={props.iconColor}/>
		</button>
	)
}