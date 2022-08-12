
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

export function updatePrimaryColour(str) {
	return {
		type: "UPDATE_PRIMARY_COLOUR",
		payload: str
	}
}

export function updateSecondaryColour(str) {
	return {
		type: "UPDATE_SECONDARY_COLOUR",
		payload: str
	}
}