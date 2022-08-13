
import { createStore, combineReducers } from "redux";
import { roomReducer, pageReducer, colorReducer } from "./reducers.js";


const allReducers = combineReducers({
	page: pageReducer,
	room: roomReducer,
	color: colorReducer
})

const store = createStore(allReducers);
export default store;