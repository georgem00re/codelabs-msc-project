
import { createStore, combineReducers } from "redux";
import { roomReducer, pageReducer } from "./reducers.js";

const allReducers = combineReducers({
	page: pageReducer,
	room: roomReducer
})

const store = createStore(allReducers);
export default store;