import * as types from '../../actionTypes'

const initialState = {
    user: null,
    error: null,
    loader: null,
    ddd: null
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_USERNAME_REQUEST:
            return {...state, loader: true, error: null}
        case types.GET_USERNAME_SUCCESS:
            return {...state, loader: false, user: action.payload}
        case types.GET_USERNAME_FAIL:
            return {...state, loader: false, error: action.payload}

        case types.CREATE_USER_REQUEST:
            return {...state, loader: true, error: null}
        case types.CREATE_USER_SUCCESS:
            return {...state, loader: false, user: action.payload}
        case types.CREATE_USER_FAIL:
            return {...state, loader: false, ddd: action.payload}

        case types.LOGOUT:
            return {...state, user: null, error: null, loader: null}
            
        
        default:
            return state
    }
}