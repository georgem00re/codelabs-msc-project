
import styles from "./UsersButton.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCodePage } from "../../../state/actions.js";
import GroupIcon from "../../../icons/GroupIcon/GroupIcon.js";
import PersonIcon from "../../../icons/PersonIcon/PersonIcon.js";

export default function UsersButton(props) {
	const secondaryColour = useSelector(state => state.secondaryColour);
	const primaryColour = useSelector(state => state.primaryColour);
	const [color, setColor] = useState(secondaryColour);
	const room = useSelector(state => state.room);
	const [dropdownVisible, setDropdownVisible] = useState(false);

	const getLength = () => {
		return Object.keys(room.users).length;
	}

	return (
		<button onClick={props.onClick} className={styles.button} onMouseEnter={() => {
			setColor(primaryColour);
			setDropdownVisible(true);
		}} onMouseLeave={() => {
			setColor(secondaryColour);
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

	const room = useSelector(state => state.room);
	const secondaryColour = useSelector(state => state.secondaryColour);

	return (
		<div className={styles.dropdownMenu} style={{ display: props.visible == true ? "flex" : "none" }}>
			{Object.keys(room.users).map((element, index) => {
				return (
					<div className={styles.dropdownCell} key={index}>
						<PersonIcon fill={secondaryColour}/>
						<h3>{room.users[element].displayName || "Anonymous"}</h3>
					</div>
				)
			})}
		</div>
	)
}
