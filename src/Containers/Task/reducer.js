import * as types from '../../actionTypes'

const initialState = {
    tasks: null,
    task: null,
    error: null,
    loader: false,
    updateTask: null,
    deleteTask: null,
}

export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_TASK_REQUEST:
            return {...state, loader: true, error: null}
        case types.GET_TASK_SUCCESS:
            return {...state, loader: false, tasks: action.payload}
        case types.GET_TASK_FAIL:
            return {...state, loader: false, error: action.payload}
         
        case types.CREATE_TASK_REQUEST:
            return {...state, loader: true, error: null}
        case types.CREATE_TASK_SUCCESS:
            return {...state, loader: false, task: action.payload}
        case types.CREATE_TASK_FAIL:
            return {...state, loader: false, error: action.payload}

        case types.UPDATE_TASK_REQUEST:
            return {...state, loader: true, error: null}
        case types.UPDATE_TASK_SUCCESS:
            return {...state, loader: false, updateTask: action.payload}
        case types.UPDATE_TASK_FAIL:
            return {...state, loader: false, error: action.payload}
         
        case types.DELETE_TASK_REQUEST:
            return {...state, loader: true, error: null}
        case types.DELETE_TASK_SUCCESS:
            return {...state, loader: false, deleteTask: action.payload}
        case types.DELETE_TASK_FAIL:
            return {...state, loader: false, error: action.payload}

        default:
            return state
    }
}