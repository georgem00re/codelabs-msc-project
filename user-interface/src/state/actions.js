
export function updateRoom(room) {
	return {
		type: "UPDATE_ROOM",
		payload: room
	}
}

export function selectChatPage() {
	return {
		type: "SELECT_CHAT_PAGE"
	}
}

export function selectVideoPage() {
	return {
		type: "SELECT_VIDEO_PAGE"
	}
}

export function selectCodePage() {
	return {
		type: "SELECT_CODE_PAGE"
	}
}