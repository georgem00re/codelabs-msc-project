
import { io } from "socket.io-client";
import { Peer } from "peerjs";

export const socket = io("http://localhost:7000/", {
	reconnection: false
})

export const peer = new Peer(undefined, {
	host: "localhost",
	port: 9000,
	path: "/peerjs"
})