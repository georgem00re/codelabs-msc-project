
import ReactDOM from "react-dom";
import styles from "./NicknameModal.module.css";

export default function NicknameModal(props) {
	if (props.open == false) { return null };
	return ReactDOM.createPortal(
		<div className={styles.window}>
			<div className={styles.modal}>
				<h1>Enter a Display Name:</h1>
				<input placeholder="e.g. George Moore" type="text"/>
				<button>Join Lab</button>
			</div>

		</div>, document.getElementById("portal")
	)
}