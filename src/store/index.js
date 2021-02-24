import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { AuthReduser } from './redusers/AuthReduser'

const rootReducer = combineReducers({
    auth: AuthReduser
})

export default createStore(rootReducer, applyMiddleware(thunk))