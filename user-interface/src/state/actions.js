
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

export function updatePrimaryColor(str) {
	return {
		type: "UPDATE_PRIMARY_COLOR",
		payload: str
	}
}

export function updateSecondaryColor(str) {
	return {
		type: "UPDATE_SECONDARY_COLOR",
		payload: str
	}
}

export function updateTertiaryColor(str) {
	return {
		type: "UPDATE_TERTIARY_COLOR",
		payload: str
	}
}

export function updateQuaternaryColor(str) {
	return {
		type: "UPDATE_QUATERNARY_COLOR",
		payload: str
	}
}