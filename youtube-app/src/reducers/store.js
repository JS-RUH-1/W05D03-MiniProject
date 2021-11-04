import id from "./id/id";
import watch from "./watch/watch";
import item from "./item/item";
import { combineReducers } from "redux";
import { createStore } from "redux";

const reducers = combineReducers({ id, watch,item  });
const store = createStore(reducers);

export default store;