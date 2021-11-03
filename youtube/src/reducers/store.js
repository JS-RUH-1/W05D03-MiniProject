import { createStore, combineReducers } from "redux";
import video from "./video/video";
import watch from "./watch/watch";

const reducers = combineReducers({ video, watch });
const store = createStore(reducers);

export default store;
