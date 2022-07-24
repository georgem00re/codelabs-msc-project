
export function roomReducer(state = null, action) {
	if (action.type === "UPDATE_ROOM") {
		return action.payload
	} else {
		return state;
	}
}

export function pageReducer(state = "CodePage", action) {
	if (action.type === "SELECT_CODE_PAGE") {
		return "CodePage"
	} else if (action.type === "SELECT_VIDEO_PAGE") {
		return "VideoPage"
	} else if (action.type === "SELECT_CHAT_PAGE") {
		return "ChatPage"
	} else {
		return state;
	}
}