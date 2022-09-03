
import styles from "./VideoButton.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectVideoPage } from "../../../state/actions.js";
import VideoIcon from "../../../icons/VideoIcon/VideoIcon.js";

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