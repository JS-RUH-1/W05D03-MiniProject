import { createStore, combineReducers } from "redux";
import Videos from "./videos";
import watchLater from "./watchLater";
import temp from "./temp";
import searchData from "./searchData";
import ui from "./ui";
const reduces = combineReducers({ Videos, watchLater, temp, searchData, ui });
const store = createStore(reduces);
export default store;
