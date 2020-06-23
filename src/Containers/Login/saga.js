import * as types from '../../actionTypes'
import {take , call, put} from 'redux-saga/effects'
import { getUserNameSuccess, getUsernameFail, createUserSuccess, createUserFail } from './action'
import { getUsername, createUser } from '../../requests'


export function* LoginSaga() {
    for(;;){
        const actionRequest = yield take(types.GET_USERNAME_REQUEST)
        try {
            const response = yield call(getUsername, actionRequest.payload)
            yield put(getUserNameSuccess(response.data))
        } catch (error) {
            yield put(getUsernameFail(error.response.data))
        }
    }
}

export function* RegisterSaga() {
    for(;;){
        const actionRequest = yield take(types.CREATE_USER_REQUEST)
        try {
            const response = yield call(createUser, actionRequest.payload)
            yield put(createUserSuccess(response.data))
            yield put(getUserNameSuccess(response.data))
        } catch (error) {
            yield put(createUserFail(error.response.data))
        }
    }
}