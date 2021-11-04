import {createStore ,combineReducers} from "redux"
import youtube from "../reducers/youtube/youtube"
import watchlater from "./watchlater/watchlater"

const reducers = combineReducers({youtube, watchlater})

const store = createStore(reducers)

export default store
