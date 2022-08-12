
import React from "react";
import styles from "./VideoPage.module.css";
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoIcon from "../../icons/VideoIcon/VideoIcon.js";
import AudioIcon from "../../icons/AudioIcon/AudioIcon.js";
import VideoStream from "../../components/VideoStream/VideoStream.js";
import { socket } from "../../App.js";

export default function VideoPage(props) {

	const page = useSelector(state => state.page);
	const room = useSelector(state => state.room);

	const videos = Object.keys(room.users).map((user, index) => {
		const peer = room.users[user].peerID;
		const paused = room.users[user].isVideoPaused;
		const muted = room.users[user].isVideoMuted;
		const displayName = room.users[user].displayName;
		return <VideoStream displayName={displayName} peer={peer} key={index} paused={paused} muted={muted}/>
	})

	return (
		<div className={styles.canvas} style={{
			display: page == "VideoPage" ? "flex" : "none"
		}}>
			{videos}
			<div className={styles.footer}>
				<button style={{
					backgroundColor: room.users[socket.id].isVideoPaused == true ? "white" : "#2E2E2E"
				}} onClick={() => {socket.emit("toggle-video");}}>
					<VideoIcon fill={room.users[socket.id].isVideoPaused == true ? "#2E2E2E" : "white" }/>
				</button>
				<button style={{
					backgroundColor: room.users[socket.id].isVideoMuted == true ? "white" : "#2E2E2E"
				}} onClick={() => socket.emit("toggle-audio")}>
					<AudioIcon fill={room.users[socket.id].isVideoMuted == true ? "#2E2E2E" : "white" }/>
				</button>
			</div>
		</div>
	)
}