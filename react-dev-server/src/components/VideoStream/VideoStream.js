
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./VideoStream.module.css";
import { peer } from "../../App.js";
import PropTypes from "prop-types";

export default function VideoStream(props) {

	const video = useRef(null);
	const color = useSelector(state => state.color)

	const getVideoStream = async () => {
		return navigator.mediaDevices.getUserMedia({ 
			audio: false, 
			video: true 
		})
	}

	useEffect(() => {

		peer.on("call", (call) => {
			getVideoStream().then((stream) => {
				call.answer(stream);
			})
		})

		if (peer.id == props.peer) {
			getVideoStream().then((stream) => {
				video.current.srcObject = stream;
				video.current.play();
			})
		}

		if (peer.id != props.peer) {
			getVideoStream().then((stream) => {
				const call = peer.call(props.peer, stream);
				call.on("stream", (mediaStream) => {
					video.current.srcObject = stream;
					video.current.play();
				})
			})
		}

		return () => {
			console.log("Unmount")
		}

	},[])

	useEffect(() => {
		props.paused == true ? video.current.pause() : video.current.play();
	}, [props.paused])

	return (
		<div className={styles.container}>
			<h1 style={{ backgroundColor: color.quaternaryColor, color: color.secondaryColor}}>{props.displayName || "Anonymous"}</h1>
			<video muted={props.muted} ref={video} style={{
				filter: props.paused == true ? "blur(5px)" : "none"
			}}/>
			<PersonIcon fill={"white"}/>
		</div>
	)
}

VideoStream.propTypes = {
	peer: PropTypes.string,
	paused: PropTypes.bool,
	muted: PropTypes.bool,
	displayName: PropTypes.string
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

PersonIcon.propTypes = {
	fill: PropTypes.string
}