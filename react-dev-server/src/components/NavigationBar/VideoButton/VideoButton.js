
import styles from "./VideoButton.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectVideoPage } from "../../../state/actions.js";
import PropTypes from "prop-types";

export default function VideoButton(props) {
	const colors = useSelector(state => state.color);
	const [color, setColor] = useState(colors.secondaryColor);
	const page = useSelector(state => state.page);
	const dispatch = useDispatch();

	useEffect(() => {
		page == "VideoPage" ? setColor(colors.primaryColor) : setColor(colors.secondaryColor);
	}, [page])

	return (
		<button onClick={() => dispatch(selectVideoPage())} className={styles.button} onMouseEnter={() => {
			if (page != "VideoPage") { setColor(colors.primaryColor) }
		}} onMouseLeave={() => {
			if (page != "VideoPage") { setColor(colors.secondaryColor) }
		}}>
			<VideoIcon fill={props.selected == true ? colors.primaryColor : color}/>
			<h1 style={{ color }}>Video</h1>
		</button>
	)
}

VideoButton.propTypes = {
	selected: PropTypes.string
}

function VideoIcon(props) {
	return (
		<svg width="300px" height="300px" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
		    <title>VideoIcon</title>
		    <g id="VideoIcon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
		        <path d="M53.0540541,73 C39.5837838,73 29,83.5875 29,97.0625 L29,202.9375 C29,216.4125 39.5837838,227 53.0540541,227 L182.945946,227 C196.416216,227 207,216.4125 207,202.9375 L207,97.0625 C207,83.5875 196.416216,73 182.945946,73 L53.0540541,73 Z M270,89 L217,117.246305 L217,182.753695 L270,211 L270,89 Z" id="Shape" fill={props.fill} fillRule="nonzero"></path>
		    </g>
		</svg>
	)
}

VideoIcon.propTypes = {
	fill: PropTypes.string
}
