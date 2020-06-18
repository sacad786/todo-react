import * as types from '../../actionTypes'

export function getTasksRequest() {
    return {
        type:types.GET_TASKS_REQUEST
    }
}
export function GetTasksSuccess(response) {
    return {
        type:types.GET_TASKS_SUCCESS,
        payload:response
    }
}
export function GetTasksFail(error) {
    return {
        type:types.GET_TASKS_FAIL,
        payload:error
    }
}

export function createTasksRequest(user) {
    return {
        type:types.CREATE_TASKS_REQUEST,
        payload:user
    }
}
export function createTasksSuccess(response) {
    return {
        type:types.CREATE_TASKS_SUCCESS,
        payload:response
    }
}
export function createTasksFail(error) {
    return {
        type:types.CREATE_TASKS_FAIL,
        payload:error
    }
}

export function updateTasksRequest(task) {
    return {
        type:types.UPDATE_TASKS_REQUEST,
        payload:task
    }
}
export function updateTasksSuccess(response) {
    return {
        type:types.UPDATE_TASKS_SUCCESS,
        payload:response
    }
}
export function updateTasksFail(error) {
    return {
        type:types.UPDATE_TASKS_FAIL,
        payload:error
    }
}

export function resetTasksError() {
    return {
        type:types.RESET_TASKS_ERROR
    }
}