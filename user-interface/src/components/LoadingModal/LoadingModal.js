
import styles from "./LoadingModal.module.css";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux"; 

export default function LoadingModal(props) {

	const color = useSelector(state => state.color);
	if (props.open == false) return null;

	return ReactDOM.createPortal(
		<div className={styles.window} style={{ backgroundColor: color.quaternaryColor }}>
			<div className={styles.modal}>
				<div className={styles.container}>
					<div style={{ borderBottomColor: color.secondaryColor, borderTopColor: color.secondaryColor }} className={styles.circle}></div>
					<h1 style={{ color: color.secondaryColor }}>Connecting...</h1>
				</div>
			</div>
		</div>, document.getElementById("portal")
	)
}