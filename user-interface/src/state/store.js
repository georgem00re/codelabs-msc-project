
import { createStore, combineReducers } from "redux";
import { roomReducer, pageReducer, primaryColourReducer } from "./reducers.js";


const allReducers = combineReducers({
	page: pageReducer,
	room: roomReducer,
	primaryColour: primaryColourReducer
})

const store = createStore(allReducers);
export default store;