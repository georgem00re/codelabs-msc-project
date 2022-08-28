
import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";

export default function ErrorModal(props) {

	const clickHandler = () => {
		window.location.href = "http://localhost:5000";
	}

	if (props.open == false) return null;
	return ReactDOM.createPortal(
		<div className={styles.window}>
			<div className={styles.modal}>
				<div style={{ backgroundColor: props.tertiaryColor }} className={styles.header}>
					<h1 style={{ color: props.primaryColor }}>&#9888;</h1>
				</div>
				<div style={{ backgroundColor: props.secondaryColor }} className={styles.footer}>
					<h1 style={{ color: props.tertiaryColor }}>Ooops!</h1>
					<p style={{ color: props.tertiaryColor }}>You have lost connection to the server :(</p>
					<button style={{ color: props.secondaryColor, backgroundColor: props.tertiaryColor }}onClick={clickHandler}>Close</button>
				</div>
			</div>
		</div>,
		document.getElementById("portal"))
}