import {createStore, combineReducers} from 'redux'

import Videos from './reducer/videos'
import Theme from './reducer/thame'

const reducer = combineReducers({ Videos, Theme})

const store = createStore(reducer)

export default store;