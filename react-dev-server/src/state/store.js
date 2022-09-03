
import { createStore, combineReducers } from "redux";
import { labReducer, pageReducer, colorReducer } from "./reducers.js";


const allReducers = combineReducers({
	page: pageReducer,
	lab: labReducer,
	color: colorReducer
})

const store = createStore(allReducers);
export default store;