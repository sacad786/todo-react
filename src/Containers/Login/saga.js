import * as types from '../../actionTypes'
import {take , call, put} from 'redux-saga/effects'
import {getUserNameSuccess, getUserNameFail, createUserSuccess, createUserFail, getUserNameRequest } from './action';
import { getUsername, createUser } from '../../requests';

export function* LoginSaga() {
    for(;;){
        const actionRequest = yield take(types.GET_USERNAME_REQUEST);
        try {
            const response = yield call(getUsername, actionRequest.payload.user_name)
            yield put(getUserNameSuccess(response))
        } catch (error) {
            yield put(getUserNameFail(error))
        }
    }
}

export function* RegisterSaga() {
    for(;;){
        const actionRequest = yield take(types.CREATE_USER_REQUEST);
        try {
            const response = yield call(createUser, actionRequest.payload)
            yield put(createUserSuccess(response.data))
           yield put(getUserNameRequest(response.data.user_name))
        } catch (error) {
            yield put(createUserFail(error.response.data))
        }
    }
}