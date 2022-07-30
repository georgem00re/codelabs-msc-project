
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./VideoStream.module.css";
import { peer } from "../../App.js";

export default function VideoStream(props) {

	const video = useRef(null);

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

	return (
		<div className={styles.container}>
			<video ref={video}/>
			<h2>&#9823;</h2>
			<h1 style={{
				backgroundColor: props.peer == peer.id ? "green" : "black"
			}}>{props.peer}</h1>
		</div>
	)
}