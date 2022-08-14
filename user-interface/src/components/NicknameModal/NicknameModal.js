
import ReactDOM from "react-dom";
import styles from "./NicknameModal.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function NicknameModal(props) {

	const [nickname, setNickname] = useState("");
	const color = useSelector(state => state.color);

	const onInputChange = (event) => {
		setNickname(event.target.value);
	}

	if (props.open == false) { return null };
	return ReactDOM.createPortal(
		<div className={styles.window}>
			<div className={styles.modal} style={{ color: color.tertiaryColor }}>
				<h1 style={{ color: color.secondaryColor }}>Join Lab</h1>
				<span></span>
				<h2 style={{ color: color.secondaryColor }}>Enter a display name:</h2>
				<input value={nickname} placeholder="John Doe" type="text" onChange={onInputChange} style={{ color: color.secondaryColor }}/>
				<div className={styles.container}>
					<button style={{ backgroundColor: color.secondaryColor, color: color.quaternaryColor }} className={styles.cancelButton} onClick={() => window.location.href = "http://localhost:5000"}>Cancel</button>
					<button style={{ backgroundColor: color.primaryColor, color: color.quaternaryColor }} className={styles.joinButton} onClick={() => props.onSubmit(nickname)}>Join</button>
				</div>
			</div>

		</div>, document.getElementById("portal")
	)
}