import * as types from '../../actionTypes'
import {take , call, put} from 'redux-saga/effects'
import { getTasks, createTask, updateTask, deleteTask } from '../../requests';
import { getTaskSuccess, getTaskFail, createTaskSuccess, createTaskFail, updateTaskSuccess, updateTaskFail, deleteTaskSuccess, deleteTaskFail } from './action';
import {getUserNameRequest } from '../Login/action'

export function* getTasksSaga() {
    for(;;){
        yield take(types.GET_TASK_REQUEST);
        try {
            const response = yield call(getTasks)
            yield put(getTaskSuccess(response.data))
        } catch (error) {
            yield put(getTaskFail(error))
        }
    }
}

export function* createTaskSaga() {
    for(;;){
        const actionRequest = yield take(types.CREATE_TASK_REQUEST);
        
        try {
            const response = yield call(createTask, actionRequest.payload) 
            yield put(createTaskSuccess(response.name))
            yield put(getUserNameRequest(actionRequest.payload.username))
        } catch (error) {
            yield put(createTaskFail(error.response.data))
        }
    }
}

export function* updateTaskSaga() {
    for(;;){
        const actionRequest = yield take(types.UPDATE_TASK_REQUEST);
        try {
            const response = yield call(updateTask, actionRequest.payload) 
            yield put(updateTaskSuccess(response.name))
            yield put(getUserNameRequest(actionRequest.payload.username))
        } catch (error) {
            yield put(updateTaskFail(error))
        }
    }
}

export function* deleteTaskSaga() {
    for(;;){
        const actionRequest = yield take(types.DELETE_TASK_REQUEST);
        try {
            const response = yield call(deleteTask, actionRequest.payload) 
            yield put(deleteTaskSuccess(response.name))
            yield put(getUserNameRequest(actionRequest.payload.username))
        } catch (error) {
            yield put(deleteTaskFail(error))
        }
    }
}
