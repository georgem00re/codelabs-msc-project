
import styles from "./VideoButton.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectVideoPage } from "../../../state/actions.js";
import VideoIcon from "../../../icons/VideoIcon/VideoIcon.js";

export default function VideoButton(props) {
	const primaryColour = useSelector(state => state.primaryColour);
	const secondaryColour = useSelector(state => state.secondaryColour);
	const [color, setColor] = useState(secondaryColour);
	const page = useSelector(state => state.page);
	const dispatch = useDispatch();

	useEffect(() => {
		page == "VideoPage" ? setColor(primaryColour) : setColor(secondaryColour);
	}, [page])

	return (
		<button onClick={() => dispatch(selectVideoPage())} className={styles.button} onMouseEnter={() => {
			if (page != "VideoPage") { setColor(primaryColour) }
		}} onMouseLeave={() => {
			if (page != "VideoPage") { setColor(secondaryColour) }
		}}>
			<VideoIcon fill={props.selected == true ? primaryColour : color}/>
			<h1 style={{ color }}>Video</h1>
		</button>
	)
}