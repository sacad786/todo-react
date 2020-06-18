import {take,call,put} from 'redux-saga/effects'
import * as types from '../../actionTypes'
import { getTasks, createTasks, updateTasks, deleteTasks } from '../../requests'
import { GetTasksSuccess, GetTasksFail, createTasksFail, createTasksSuccess, updateTasksSuccess, updateTasksFail, getTasksRequest, deleteTasksSuccess, deleteTasksFail } from './action'
import { getUsersByUsernameRequest } from '../Login/action'

export function* tasksSaga(){
    for(;;){
        yield take(types.GET_TASKS_REQUEST)

        try {
           const response = yield call(getTasks) 
           yield put(GetTasksSuccess(response.data))

        } catch (error) {
            yield put(GetTasksFail(error))
        }
    }
}

export function* createTasksSaga(){
    for(;;){
       const actionRequest   =  yield take(types.CREATE_TASKS_REQUEST)
        try {
           const response = yield call(createTasks, actionRequest.payload) 
           
           yield put(createTasksSuccess(response.name))
           yield put(getUsersByUsernameRequest(actionRequest.payload.username))

        } catch (error) {
            yield put(createTasksFail(error.response.data))
        }
    }
}

export function* updateTasksSaga(){
    for(;;){
       const actionRequest = yield take(types.UPDATE_TASKS_REQUEST)

        try {
           const response = yield call(updateTasks,actionRequest.payload) 
           yield put(updateTasksSuccess(response))
        } catch (error) {
            yield put(updateTasksFail(error))
        }
    }
}

