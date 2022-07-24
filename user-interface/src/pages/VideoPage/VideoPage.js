
import React from "react";
import styles from "./VideoPage.module.css";
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoIcon from "../../icons/VideoIcon/VideoIcon.js";
import AudioIcon from "../../icons/AudioIcon/AudioIcon.js";
import VideoStream from "../../components/VideoStream/VideoStream.js";

export default function VideoPage(props) {

	const page = useSelector(state => state.page);
	const room = useSelector(state => state.room);

	const videos = Object.keys(room.users).map((user, index) => {
		const peer = room.users[user].peerID;
		return <VideoStream peer={peer} key={index}/>
	})

	return (
		<div className={styles.canvas} style={{
			display: page == "VideoPage" ? "flex" : "none"
		}}>
			{videos}
			<div className={styles.footer}>
				<button>
					<VideoIcon fill="white"/>
				</button>
				<button onClick={() => alert("AUDIO")}>
					<AudioIcon fill="white"/>
				</button>
			</div>
		</div>
	)
}