
import styles from "./NavigationBar.module.css";
import CodeButton from "./CodeButton/CodeButton.js";
import ChatButton from "./ChatButton/ChatButton.js";
import VideoButton from "./VideoButton/VideoButton.js";
import UsersButton from "./UsersButton/UsersButton.js";
import ShareButton from "./ShareButton/ShareButton.js";
import ExitButton from "./ExitButton/ExitButton.js";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export default function NavigationBar(props) {

	return (
		<nav className={styles.navbar} style={{ backgroundColor: props.backgroundColor }}>
			<CodeButton/>
			<ChatButton/>
			<VideoButton/>
			<UsersButton/>
			<ShareButton/>
			<ExitButton/>
		</nav>
	)
}

NavigationBar.propTypes = {
	backgroundColor: PropTypes.string
}
