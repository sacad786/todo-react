import { all, fork } from "redux-saga/effects";
import { tasksSaga, createTasksSaga, deleteTasksSaga, updateTasksSaga } from "./Containers/Tasks/saga";
import { loginSaga, createUsersSaga, } from "./Containers/Login/saga";

export default function* rootSaga(){
    yield all([
        fork(createUsersSaga),
        fork(loginSaga),
        fork(tasksSaga),
        fork(createTasksSaga),
        fork(updateTasksSaga),
    ])
}