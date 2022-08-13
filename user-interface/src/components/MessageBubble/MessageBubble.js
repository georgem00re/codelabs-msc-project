
import styles from "./MessageBubble.module.css";
import { socket } from "../../App.js";
import { useSelector} from "react-redux";

export default function MessageBubble(props) {

	const date = new Date(props.timestamp);
	const time = `${date.getHours()}:${date.getMinutes()}`;
	const color = useSelector(state => state.color);

	return (
		<div className={props.author === socket.id ? `${styles.container} ${styles.containerAuthor}` : styles.container}>
			<div style={{ backgroundColor: color.tertiaryColor }} className={props.author === socket.id ? `${styles.cell} ${styles.cellAuthor}` : styles.cell}>
				<h1 className={styles.displayName} style={{ color: color.secondaryColor }}>{props.displayName} <span>{time}</span></h1>
				<p className={props.author === socket.id ? `${styles.message} ${styles.messageAuthor}` : styles.message} style={{ color: color.secondaryColor }}>{props.message}</p>
			</div>
		</div>
	)
}