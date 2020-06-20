import {all, fork} from 'redux-saga/effects'
import {LoginSaga, RegisterSaga} from './Containers/Login/saga'
import { getTasksSaga } from './Containers/Task/saga'

export default function* rootSaga() {
    yield all([
        fork(LoginSaga),
        fork(RegisterSaga),
        fork(getTasksSaga)
    ])
}