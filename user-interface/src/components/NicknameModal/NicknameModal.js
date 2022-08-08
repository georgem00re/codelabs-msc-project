
import ReactDOM from "react-dom";
import styles from "./NicknameModal.module.css";
import { useState } from "react";

export default function NicknameModal(props) {

	const [nickname, setNickname] = useState("");

	const onInputChange = (event) => {
		setNickname(event.target.value);
	}

	if (props.open == false) { return null };
	return ReactDOM.createPortal(
		<div className={styles.window}>
			<div className={styles.modal}>
				<h1>Enter a Display Name:</h1>
				<input value={nickname} placeholder="e.g. George Moore" type="text" onChange={onInputChange}/>
				<button onClick={() => props.onSubmit(nickname)}>Join Lab</button>
			</div>

		</div>, document.getElementById("portal")
	)
}