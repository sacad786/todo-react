import {all, fork} from 'redux-saga/effects'
import { RegisterSaga, LoginSaga } from './Containers/Login/saga'
import { getTasksSaga, createTaskSaga, updateTaskSaga, deleteTaskSaga } from './Containers/Task/saga'

export default function* rootSaga() {
    yield all([
        fork(LoginSaga),
        fork(RegisterSaga),
        fork(getTasksSaga),
        fork(createTaskSaga),
        fork(updateTaskSaga),
        fork(deleteTaskSaga)
    ])
}