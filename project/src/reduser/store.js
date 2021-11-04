import {createStore  , combineReducers } from 'redux' 
import Vadios from './Vadio'

const reducer = combineReducers({Vadios})

const store = createStore(reducer)

export default store