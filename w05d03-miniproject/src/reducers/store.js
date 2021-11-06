import { createStore , combineReducers } from "redux";

import video from "./video/video"
import videos from "./videos/videos"
import search from "./search/search"

const reducers = combineReducers({video,videos,search})
const store = createStore(reducers)
export default store;