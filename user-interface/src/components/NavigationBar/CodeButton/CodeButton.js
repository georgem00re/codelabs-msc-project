
import styles from "./CodeButton.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCodePage } from "../../../state/actions.js";
import CodeIcon from "../../../icons/CodeIcon/CodeIcon.js";


export default function CodeButton(props) {
	const primaryColour = useSelector(state => state.primaryColour);
	const secondaryColour = useSelector(state => state.secondaryColour);
	const [color, setColor] = useState(secondaryColour);
	const page = useSelector(state => state.page);
	const dispatch = useDispatch();

	useEffect(() => {
		page == "CodePage" ? setColor(primaryColour) : setColor(secondaryColour);
	}, [page])

	return (
		<button onClick={() => dispatch(selectCodePage())} className={styles.button} onMouseEnter={() => {
			if (page != "CodePage") { setColor(primaryColour) }
		}} onMouseLeave={() => {
			if (page != "CodePage") { setColor(secondaryColour) }
		}}>
			<CodeIcon fill={color}/>
			<h1 style={{ color }}>Code</h1>
		</button>
	)
}