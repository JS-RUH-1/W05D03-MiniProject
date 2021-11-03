import {createStore ,combineReducers } from 'redux'

import YoutReducer from './Reducers/YoutReducer'

const reducer =combineReducers({YoutReducer})

const store = createStore(reducer)

export default store;