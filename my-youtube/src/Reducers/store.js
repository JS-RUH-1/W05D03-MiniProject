import { createStore, combineReducers } from "redux";
import videos from "./Videos/videos";
import details from "./Details/details";
import searchVideos from "./SearchVideos/searchVideos";
import watchlater from "./WatchLater/watchlater";

const reducers = combineReducers({ videos, details, searchVideos, watchlater });

const store = createStore(reducers);
export default store;
