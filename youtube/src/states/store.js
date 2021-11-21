import { createStore, combineReducers } from "redux";
import watchlater from './watchlater/watchlater';
import darkmode from './darkmode/darkmode';

const reducers = combineReducers({ watchlater, darkmode });
const store = createStore(reducers);

export default store;