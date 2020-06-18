import * as types from '../../actionTypes'

const initialState = {
    tasks: null,
    loader: false,
    error: null,
    task: null,
    updateTask: null,
    deleteTask: null
}

export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_TASKS_REQUEST:
            return {...state, loader: true, error: null};
        case types.GET_TASKS_SUCCESS:
            return {...state, loader: false, tasks: action.payload};
        case types.GET_TASKS_FAIL:
            return {...state, loader: false, error: action.payload};
            
        case types.CREATE_TASKS_REQUEST:
            return {...state, loader: true, error: null};
        case types.CREATE_TASKS_SUCCESS:
            return {...state, loader: false, task: action.payload};
        case types.CREATE_TASKS_FAIL:
            return {...state, loader: false, error: action.payload};

        case types.UPDATE_TASKS_REQUEST:
            return {...state, loader: true, error: null};
        case types.UPDATE_TASKS_SUCCESS:
            return {...state, loader: false, updateTask: action.payload};
        case types.UPDATE_TASKS_FAIL:
            return {...state, loader: false, error: action.payload};

        case types.DELETE_TASKS_REQUEST:
            return {...state, loader: true, error: null};
        case types.DELETE_TASKS_SUCCESS:
            return {...state, loader: false, deleteTask: action.payload};
        case types.DELETE_TASKS_FAIL:
            return {...state, loader: false, error: action.payload};

        case types.RESET_TASKS_ERROR:
            return {...state, loader: false, error: null, task:null, updateTask:null,  deleteTask:null}
    
        default:
            return state;
    }
}