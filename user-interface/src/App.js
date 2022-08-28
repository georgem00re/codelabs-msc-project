
import { useEffect, useState } from "react";
import { updateLab  } from "./state/actions.js";
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

	const lab = useSelector(state => state.lab);
	const page = useSelector(state => state.page);
	const color = useSelector(state => state.color);
	const [error, setError] = useState(false);
	const [nicknameModalOpen, setNicknameModalOpen] = useState(false);
	const dispatch = useDispatch();
	const ipaddr = process.env.REACT_APP_HOST_IP_ADDRESS || "localhost";

	const fetchPort = async (labID) => {
		const res = await fetch(`http://${ipaddr}:10000`, { method: "POST", headers: { "Content-Type": "application/json"}, body: JSON.stringify({ labID }) });
		const data = await res.json();
		return data.port;
	}

	const connectSocket = (port) => {
		return new Promise((resolve, reject) => {
			const socket = io.connect(`http://${ipaddr}:${port}`, { reconnection: true });
			socket.on("connect", () => {
				resolve(socket);
			})
			setTimeout(() => {
				reject("Failed to connect to Socket.IO server.")
			}, 5000)
		})
	}

	const connectPeer = (port) => {
		return new Promise((resolve, reject) => {
			const peer = new Peer(undefined, { host: ipaddr, port: port, path: "/peerjs" })
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
			const labID = window.location.pathname.replace("/lab/", "");
			const port = await fetchPort(labID);
			socket = await connectSocket(port);
			peer = await connectPeer(port);

			socket.on("update-lab", (lab) => {
				dispatch(updateLab(lab));
			})

			socket.on("disconnect", () => {
				setError(true);
			})
			setNicknameModalOpen(true);
		}
		initialise();

	},[])

	if (lab == null) { 
		return (
			<React.Fragment>
				<LoadingModal fontColor={color.secondaryColor} backgroundColor={color.quaternaryColor}/>
				<NicknameModal open={nicknameModalOpen} onSubmit={(nickname) => {
					socket.emit("join-lab", peer.id, nickname);
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
			<ErrorModal open={error}/>
		</div>
	)
}
