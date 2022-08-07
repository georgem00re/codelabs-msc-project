
import React from "react";
import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";

export default class ErrorModal extends React.Component {
	render() {
		if (this.props.open == false) return null;
		return ReactDOM.createPortal(
			<div className={styles.window}>
				<div className={styles.modal}>
					<div className={styles.header}>
						<h1>&#9888;</h1>
					</div>
					<div className={styles.footer}>
						<h1>Ooops!</h1>
						<p>{this.props.message}</p>
						<button onClick={this.props.onDismiss}>Close</button>
					</div>
				</div>
			</div>,
			document.getElementById("portal"))
	}
}