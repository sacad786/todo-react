import { combineReducers } from "redux";
import loginReducer from "./Containers/Login/reducer";
import tasksReducer from "./Containers/Tasks/reducer";
import { routerReducer } from "react-router-redux";

export default function rootReducer(){
    return combineReducers({
        login: loginReducer,
        tasks: tasksReducer,
        routing : routerReducer
    })
}