import { createStore, combineReducers } from "redux";
import video from "./video/video";

const reducers = combineReducers({ video });
const store = createStore(reducers);

export default store;
