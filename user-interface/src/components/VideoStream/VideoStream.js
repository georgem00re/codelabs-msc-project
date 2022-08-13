
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./VideoStream.module.css";
import { peer } from "../../App.js";

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
			<h1 style={{ backgroundColor: color.tertiaryColor, color: color.secondaryColor}}>{props.displayName || "Anonymous"}</h1>
			<video muted={props.muted} ref={video} style={{
				filter: props.paused == true ? "blur(5px)" : "none"
			}}/>
			<h2>&#9823;</h2>
		</div>
	)
}