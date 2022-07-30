
import styles from "./MessageBubble.module.css";
import { socket } from "../../App.js";

export default function MessageBubble(props) {

	const date = new Date(props.timestamp);
	const time = `${date.getHours()}:${date.getMinutes()}`

	return (
		<div className={props.author === socket.id ? `${styles.container} ${styles.containerAuthor}` : styles.container}>
			<div className={props.author === socket.id ? `${styles.cell} ${styles.cellAuthor}` : styles.cell}>
				<h1 className={styles.displayName}>{props.displayName} <span>{time}</span></h1>
				<p className={props.author === socket.id ? `${styles.message} ${styles.messageAuthor}` : styles.message}>{props.message}</p>
			</div>
		</div>
	)
}