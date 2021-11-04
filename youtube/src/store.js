import { createStore, combineReducers } from "redux";
import searches from "./reducers/searchReducer";
import watchLaterReducer from "./reducers/watchReducer";



const reducers = combineReducers({searches,watchLaterReducer});

const store = createStore(reducers);

export default store;