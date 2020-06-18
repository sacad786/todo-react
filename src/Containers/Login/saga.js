import {take,call,put} from 'redux-saga/effects'
import * as types from '../../actionTypes'
import { getUsersByUsername, createUsers } from '../../requests'
import { getUsersByUsernameFail, getUsersByUsernameSuccess, createUsersSuccess, createUsersFail, getUsersByUsernameRequest } from './action'

export function* loginSaga() {
    for (;;) {
        const actionRequest = yield take(types.GET_USERS_BY_USERNAME_REQUEST)
        try {
           const response = yield call(getUsersByUsername, actionRequest.payload) 
           yield put(getUsersByUsernameSuccess(response.data))
        } catch (error) {
            yield put(getUsersByUsernameFail(error.response.data))
        }   
    }
}

export function* createUsersSaga(){
    for(;;){
       const actionRequest   =  yield take(types.CREATE_USERS_REQUEST)
 
        try {
           const response = yield call(createUsers, actionRequest.payload) 
           yield put(createUsersSuccess(response.data))
           yield put(getUsersByUsernameRequest(response.data.user_name))
        } catch (error) {
            yield put(createUsersFail(error.response.data))
        }
    }
}
