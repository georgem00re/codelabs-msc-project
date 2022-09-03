
import styles from "./UsersButton.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCodePage } from "../../../state/actions.js";
import GroupIcon from "../../../icons/GroupIcon/GroupIcon.js";
import PersonIcon from "../../../icons/PersonIcon/PersonIcon.js";

export default function UsersButton(props) {
	const colors = useSelector(state => state.color);
	const [color, setColor] = useState(colors.secondaryColor);
	const lab = useSelector(state => state.lab);
	const [dropdownVisible, setDropdownVisible] = useState(false);

	const getLength = () => {
		return Object.keys(lab.users).length;
	}

	return (
		<button onClick={props.onClick} className={styles.button} onMouseEnter={() => {
			setColor(colors.primaryColor);
			setDropdownVisible(true);
		}} onMouseLeave={() => {
			setColor(colors.secondaryColor);
			setDropdownVisible(false);
		}}>
			<GroupIcon fill={color}/>
			<h2 className={styles.number} style={{ color }}>{getLength()}</h2>
			<h1 style={{ color }}>Users</h1>
			<DropdownMenu visible={dropdownVisible}/>
		</button>
	)
}

function DropdownMenu(props) {

	const lab = useSelector(state => state.lab);
	const colors = useSelector(state => state.color);

	return (
		<div className={styles.dropdownMenu} style={{ display: props.visible == true ? "flex" : "none", backgroundColor: colors.tertiaryColor }}>
			{Object.keys(lab.users).map((element, index) => {
				return (
					<div className={styles.dropdownCell} key={index}>
						<PersonIcon fill={colors.secondaryColor}/>
						<h3 style={{ color: colors.secondaryColor }}>{lab.users[element].displayName || "Anonymous"}</h3>
					</div>
				)
			})}
		</div>
	)
}
