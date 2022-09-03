
import styles from "./LoadingModal.module.css";
import ReactDOM from "react-dom";

export default function LoadingModal(props) {

	if (props.open == false) return null;

	return ReactDOM.createPortal(
		<div className={styles.window} style={{ backgroundColor: props.backgroundColor }}>
			<div className={styles.modal}>
				<div className={styles.container}>
					<div style={{ borderBottomColor: props.fontColor, borderTopColor: props.fontColor }} className={styles.circle}></div>
					<h1 style={{ color: props.fontColor }}>Connecting...</h1>
				</div>
			</div>
		</div>, document.getElementById("portal")
	)
}