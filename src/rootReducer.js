import { routerReducer } from "react-router-redux"
import { combineReducers } from "redux"
import loginReducer from './Containers/Login/reducer'
import tasksReducer from './Containers/Task/reducer'

export default function rootReducer() {
    return combineReducers({
        login: loginReducer,
        tasks: tasksReducer,
        routing: routerReducer
    })
}