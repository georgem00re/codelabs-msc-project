
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
				<h1>Join Lab</h1>
				<input value={window.location.href} type="text" readonly/>
				<input value={nickname} placeholder="Display Name" type="text" onChange={onInputChange}/>
				<div>
					<button className={styles.joinButton} onClick={() => props.onSubmit(nickname)}>Join</button>
					<button className={styles.cancelButton} onClick={() => window.location.href = "http://localhost:5000"}>Cancel</button>
				</div>
			</div>

		</div>, document.getElementById("portal")
	)
}