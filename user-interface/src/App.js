
import { useEffect } from "react";
import { updateRoom } from "./state/actions.js";
import { useSelector, useDispatch } from "react-redux";
import LoadingModal from "./components/LoadingModal/LoadingModal.js";
import NavigationBar  from "./components/NavigationBar/NavigationBar.js";
import ChatPage from "./pages/ChatPage/ChatPage.js";
import VideoPage from "./pages/VideoPage/VideoPage.js";
import CodePage from "./pages/CodePage/CodePage.js";
import { peer, socket } from "./utils.js";

export default function App() {

	const room = useSelector(state => state.room);
	const page = useSelector(state => state.page);
	const dispatch = useDispatch();

	useEffect(() => {
		const roomID = window.location.pathname.replace("/room/", "");
		const nickname = window.localStorage.getItem("nickname");

		peer.on("open", (peerID) => {
			if (socket.id == undefined || peer.id == undefined) { return }
			socket.emit("join-room", roomID, peer.id, nickname);
		})

		socket.on("connect", () => {
			if (socket.id == undefined || peer.id == undefined) { return }
			socket.emit("join-room", roomID, peer.id, nickname);
		})

		socket.on("update-room", (rm) => {
			dispatch(updateRoom(rm));
		})
	},[])


	if (room == null) { 
		return <LoadingModal/> 
	}

	return (
		<div style={{ position: "absolute", height: "100%", width: "100%", backgroundColor: "white"}}>
			<NavigationBar/>
			<CodePage/>
			<VideoPage/>
			<ChatPage/>
		</div>
	)
}
