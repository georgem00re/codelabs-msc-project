
import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";
import { useSelector } from "react-redux"

export default function ErrorModal(props) {

	const color = useSelector(state => state.color);

	const clickHandler = () => {
		window.location.href = "http://localhost:5000";
	}

	if (props.open == false) return null;
	return ReactDOM.createPortal(
		<div className={styles.window}>
			<div className={styles.modal}>
				<div style={{ backgroundColor: color.tertiaryColor }} className={styles.header}>
					<h1 style={{ color: color.primaryColor }}>&#9888;</h1>
				</div>
				<div style={{ backgroundColor: color.secondaryColor }} className={styles.footer}>
					<h1 style={{ color: color.tertiaryColor }}>Ooops!</h1>
					<p style={{ color: color.tertiaryColor }}>You have lost connection to the server :(</p>
					<button style={{ color: color.secondaryColor, backgroundColor: color.tertiaryColor }}onClick={clickHandler}>Close</button>
				</div>
			</div>
		</div>,
		document.getElementById("portal"))
}