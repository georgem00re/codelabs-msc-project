
import React from "react";
import ReactDOM from "react-dom";
import styles from "./LoadingModal.module.css";

export default class LoadingModal extends React.Component {
	render() {
		if (this.props.open == false) return null;
		return ReactDOM.createPortal(
			<div className={styles.window}>
				<div className={styles.modal}>
					<div className={styles.container}>
						<div className={styles.circle}></div>
						<div className={styles.circle}></div>
						<div className={styles.circle}></div>
					</div>
				</div>
			</div>, document.getElementById("portal")
		)
	}
}