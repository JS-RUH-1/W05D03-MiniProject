// 1. import createStore, combineReducers from redux
import { createStore, combineReducers } from "redux";
import WatchLater from "./watchlater";
// 2. import the reducer from its file location.
// 3. Define a variable called "reducers", we will use to store all the reducer functions with the combineReducers method.
const reducers = combineReducers({WatchLater});
// 4. Declare a variable called "store" and set it equal the method "createStore" and pass the reducers variable as a value as you invoque it.
const store = createStore(reducers);
export default store;
