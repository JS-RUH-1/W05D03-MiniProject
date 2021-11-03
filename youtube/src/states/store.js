import { createStore, combineReducers } from "redux";
import watchLater from './watchlater/watchlater';

const reducers = combineReducers({ watchLater });
const store = createStore(reducers);

export default store;