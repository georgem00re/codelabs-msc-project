
import { createStore, combineReducers } from "redux";
import { roomReducer, pageReducer, primaryColourReducer, secondaryColourReducer } from "./reducers.js";


const allReducers = combineReducers({
	page: pageReducer,
	room: roomReducer,
	primaryColour: primaryColourReducer,
	secondaryColour: secondaryColourReducer
})

const store = createStore(allReducers);
export default store;