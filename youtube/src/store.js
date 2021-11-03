import { createStore, combineReducers } from "redux";
import searches from "./reducers/searchReducer";



const reducers = combineReducers({searches});

const store = createStore(reducers);

export default store;