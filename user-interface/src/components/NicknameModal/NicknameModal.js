
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
				<span></span>
				<h2>Enter a display name:</h2>
				<input value={nickname} placeholder="John Doe" type="text" onChange={onInputChange}/>
				<div className={styles.container}>
					<button className={styles.cancelButton} onClick={() => window.location.href = "http://localhost:5000"}>Cancel</button>
					<button className={styles.joinButton} onClick={() => props.onSubmit(nickname)}>Join</button>
				</div>
			</div>

		</div>, document.getElementById("portal")
	)
}