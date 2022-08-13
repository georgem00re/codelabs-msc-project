
import styles from "./CodeButton.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCodePage } from "../../../state/actions.js";
import CodeIcon from "../../../icons/CodeIcon/CodeIcon.js";


export default function CodeButton(props) {
	const colors = useSelector(state => state.color);
	const [color, setColor] = useState(colors.secondaryColor);
	const page = useSelector(state => state.page);
	const dispatch = useDispatch();

	useEffect(() => {
		page == "CodePage" ? setColor(colors.primaryColor) : setColor(colors.secondaryColor);
	}, [page])

	return (
		<button onClick={() => dispatch(selectCodePage())} className={styles.button} onMouseEnter={() => {
			if (page != "CodePage") { setColor(colors.primaryColor) }
		}} onMouseLeave={() => {
			if (page != "CodePage") { setColor(colors.secondaryColor) }
		}}>
			<CodeIcon fill={color}/>
			<h1 style={{ color }}>Code</h1>
		</button>
	)
}