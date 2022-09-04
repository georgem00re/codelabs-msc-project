
import styles from "./UsersButton.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCodePage } from "../../../state/actions.js";

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

function GroupIcon(props) {
	return (
		<svg width="300px" height="300px" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
		    <title>ParticipantsIcon</title>
		    <g id="ParticipantsIcon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
		        <g id="Group" transform="translate(13.000000, 54.000000)" fill={props.fill}>
		            <circle id="Oval" cx="137" cy="48" r="48"></circle>
		            <circle id="Oval" cx="40.5" cy="55.5" r="27.5"></circle>
		            <path d="M95.5,109 L178.5,109 C201.419817,109 220,127.580183 220,150.5 L220,171 C220,182.59798 210.59798,192 199,192 L75,192 C63.4020203,192 54,182.59798 54,171 L54,150.5 C54,127.580183 72.5801829,109 95.5,109 Z" id="Rectangle"></path>
		            <path d="M27.5,96 L58.1419491,96 C62.3981056,96 66.257743,98.4986317 68,102.381853 L68,102.381853 L68,102.381853 C60.8990833,106.014319 54.3597732,112.302619 48.3820697,121.246754 C42.4043662,130.190889 40.0937249,139.938885 41.450146,150.490741 L14.171992,150.825882 C6.44058895,150.92087 0.0960450455,144.730333 0.00105651244,136.99893 C0.000352177458,136.941602 1.80883866e-15,136.884271 0,136.826938 L0,123.5 C-1.85997282e-15,108.312169 12.3121694,96 27.5,96 Z" id="Rectangle"></path>
		            <circle id="Oval" transform="translate(233.500000, 55.500000) scale(-1, 1) translate(-233.500000, -55.500000) " cx="233.5" cy="55.5" r="27.5"></circle>
		            <path d="M233.5,96 L264.141949,96 C268.398106,96 272.257743,98.4986317 274,102.381853 L274,102.381853 L274,102.381853 C266.899083,106.014319 260.359773,112.302619 254.38207,121.246754 C248.404366,130.190889 246.093725,139.938885 247.450146,150.490741 L220.171992,150.825882 C212.440589,150.92087 206.096045,144.730333 206.001057,136.99893 C206.000352,136.941602 206,136.884271 206,136.826938 L206,123.5 C206,108.312169 218.312169,96 233.5,96 Z" id="Rectangle" transform="translate(240.000000, 123.500000) scale(-1, 1) translate(-240.000000, -123.500000) "></path>
		        </g>
		    </g>
		</svg>
	)
}

function PersonIcon(props) {
	return (
		<svg width="300px" height="300px" viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
		    <title>Artboard</title>
		    <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
		        <path d="M151,153 C182.490618,153 208,127.494781 208,96 C208,64.5448852 182.490618,39 151,39 C119.509382,39 94,64.5052192 94,96 C94,127.494781 119.548992,153 151,153 Z M200.2219,161.07984 L195.64731,161.03992 C194.069865,161.03992 191.664262,161.638723 190.244561,162.397206 C190.244561,162.397206 186.616438,164.512974 183.303804,165.9501 C173.405338,170.261477 162.126607,172.736527 150.177463,172.736527 C138.267754,172.736527 127.02846,170.301397 117.169429,166.02994 C113.817359,164.552894 110.110364,162.397206 110.110364,162.397206 C108.730099,161.638723 106.324496,161 104.707615,161 L100.211897,161.03992 C82.1107177,163.43513 63.1025074,179.682635 57.6603227,197.287425 C57.6603227,197.287425 51.8632129,209.143713 51.0350543,232.457086 C50.9561821,234.213573 51.0350543,232.457086 51.0350543,232.457086 C50.9956182,235.491018 53.4012216,239.363273 56.5166751,241 C56.5166751,241 87.3162857,261 150.019718,261 C212.72315,261 243.522761,240.96008 243.522761,240.96008 C246.598778,239.283433 249.043818,235.051896 248.964946,232.377246 C248.964946,232.377246 249.043818,234.133733 248.964946,232.377246 C248.176223,209.183633 242.536858,197.806387 242.536858,197.806387 C237.567907,180.121756 218.244207,163.754491 200.2219,161.07984 Z" id="Shape" fill={props.fill} fillRule="nonzero"></path>
		    </g>
		</svg>
	)
}
