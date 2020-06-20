import * as types from '../../actionTypes'

export function getTaskRequest() {
    return {
        type: types.GET_TASK_REQUEST
    }
}
export function getTaskSuccess(response) {
    return {
        type: types.GET_TASK_SUCCESS,
        payload: response
    }
}
export function getTaskFail(error) {
    return {
        type: types.GET_TASK_SUCCESS,
        payload: error
    }
}

export function createTaskRequest(task) {
    return {
        type: types.CREATE_TASK_REQUEST,
        payload: task
    }
}
export function createTaskSuccess(response) {
    return {
        type: types.CREATE_TASK_SUCCESS,
        payload: response
    }
}
export function createTaskFail(error) {
    return {
        type: types.CREATE_TASK_SUCCESS,
        payload: error
    }
}

export function updateTaskRequest(task) {
    return {
        type: types.UPDATE_TASK_REQUEST,
        payload: task
    }
}
export function updateTaskSuccess(response) {
    return {
        type: types.UPDATE_TASK_SUCCESS,
        payload: response
    }
}
export function updateTaskFail(error) {
    return {
        type: types.UPDATE_TASK_SUCCESS,
        payload: error
    }
}

export function deleteTaskRequest(taskId) {
    return {
        type: types.DELETE_TASK_REQUEST,
        payload: taskId
    }
}
export function deleteTaskSuccess(response) {
    return {
        type: types.DELETE_TASK_SUCCESS,
        payload: response
    }
}
export function deleteTaskFail(error) {
    return {
        type: types.DELETE_TASK_SUCCESS,
        payload: error
    }
}

export function logoutRequest() {
    return {
        type: types.LOGOUT,
    }
}