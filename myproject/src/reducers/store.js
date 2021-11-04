import { createStore, combineReducers } from "redux";
import youtube from "./youtube/youtube";


const reducers = combineReducers({youtube});
const store = createStore(reducers);



export default store;