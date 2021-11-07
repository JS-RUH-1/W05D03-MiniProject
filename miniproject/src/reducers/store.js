
import { createStore, combineReducers } from "redux";
import vid from './vid/vid';
import watchlater from './watchlater/watchlater';
import detailes from "./detailes/detailes";
// import search from "./Search/search";

const reducers = combineReducers({vid, watchlater, detailes});
const store = createStore(reducers);

export default store;
// , detailes, search