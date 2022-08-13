
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

export function colorReducer(state = { primaryColor: "#B2CAFB", secondaryColor: "#F2F2F2", tertiaryColor: "#2E2E2E", quaternaryColor: "#212121" }, action) {
	if (action.type === "UPDATE_PRIMARY_COLOR") {
		return {...state, primaryColor: action.payload}
	} else if (action.type === "UPDATE_SECONDARY_COLOR") {
		return {...state, secondaryColor: action.payload}
	} else if (action.type === "UPDATE_TERTIARY_COLOR") {
		return {...state, tertiaryColor: action.payload}
	} else if (action.type === "UPDATE_QUATERNARY_COLOR") {
		return {...state, quaternaryColor: action.payload}
	} else {
		return state;
	}
}
