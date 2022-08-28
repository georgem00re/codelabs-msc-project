
import styles from "./MessageBubble.module.css";

export default function MessageBubble(props) {

	const date = new Date(props.timestamp);
	const time = `${date.getHours()}:${date.getMinutes()}`;

	return (
		<div className={props.author === props.socketID ? `${styles.container} ${styles.containerAuthor}` : styles.container}>
			<div style={{ backgroundColor: props.backgroundColor }} className={props.author === props.socketID ? `${styles.cell} ${styles.cellAuthor}` : styles.cell}>
				<h1 className={styles.displayName} style={{ color: props.fontColor }}>{props.displayName} <span>{time}</span></h1>
				<p className={props.author === props.socketID ? `${styles.message} ${styles.messageAuthor}` : styles.message} style={{ color: props.fontColor }}>{props.message}</p>
			</div>
		</div>
	)
}