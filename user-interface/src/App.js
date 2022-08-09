
import { useEffect, useState } from "react";
import { updateRoom  } from "./state/actions.js";
import { useSelector, useDispatch } from "react-redux";
import LoadingModal from "./components/LoadingModal/LoadingModal.js";
import NavigationBar  from "./components/NavigationBar/NavigationBar.js";
import ChatPage from "./pages/ChatPage/ChatPage.js";
import VideoPage from "./pages/VideoPage/VideoPage.js";
import CodePage from "./pages/CodePage/CodePage.js";
import NicknameModal from "./components/NicknameModal/NicknameModal.js";
import ErrorModal from "./components/ErrorModal/ErrorModal.js";
import { io } from "socket.io-client";
import { Peer } from "peerjs";
import React from "react";

export let peer; 
export let socket;

export default function App() {

	const room = useSelector(state => state.room);
	const page = useSelector(state => state.page);
	const [error, setError] = useState(false);
	const [nicknameModalOpen, setNicknameModalOpen] = useState(false);
	const dispatch = useDispatch();

	const fetchPort = async (roomID) => {
		const res = await fetch("http://localhost:10000", { method: "POST", headers: { "Content-Type": "application/json"}, body: JSON.stringify({ roomID }) });
		const data = await res.json();
		return data.port;
	}

	const connectSocket = (port) => {
		return new Promise((resolve, reject) => {
			const socket = io.connect(`http://localhost:${port}`, { reconnection: true });
			socket.on("connect", () => {
				resolve(socket);
			})
			setTimeout(() => {
				reject("Failed to connect to Socket.IO server.")
			}, 5000)
		})
	}

	const connectPeer = () => {
		return new Promise((resolve, reject) => {
			const peer = new Peer(undefined, { host: "localhost", port: 9000, path: "/peerjs" })
			peer.on("open", () => {
				resolve(peer);
			})
			setTimeout(() => {
				reject("Failed to connect to PeerJS server.")
			}, 5000)
		})
	}

	useEffect(() => {

		const initialise = async () => {
			const nickname = window.localStorage.getItem("nickname");
			const roomID = window.location.pathname.replace("/room/", "");
			const port = await fetchPort(roomID);
			socket = await connectSocket(port);
			peer = await connectPeer();

			socket.on("update-room", (room) => {
				dispatch(updateRoom(room));
			})

			socket.on("disconnect", () => {
				setError(true);
			})

			if (nickname != null) {
				socket.emit("join-room", peer.id, nickname);
			} else {
				setNicknameModalOpen(true);
			}
		}
		initialise();

	},[])

	if (room == null) { 
		return (
			<React.Fragment>
				<LoadingModal/>
				<NicknameModal open={nicknameModalOpen} onSubmit={(nickname) => {
					socket.emit("join-room", peer.id, nickname);
					setNicknameModalOpen(false);
				}}/>
			</React.Fragment>
		)
	}

	return (
		<div style={{ position: "absolute", height: "100%", width: "100%", backgroundColor: "white"}}>
			<NavigationBar/>
			<CodePage/>
			<VideoPage/>
			<ChatPage/>
			<ErrorModal open={error} onDismiss={() => window.location.href = "http://localhost:5000" }/>
		</div>
	)
}
