import * as types from '../../actionTypes'

const initialState = {
    loader: false,
    error: null,
    user: null,
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_USERS_BY_USERNAME_REQUEST:
            return {...state, loader: true, error: null};
        case types.GET_USERS_BY_USERNAME_SUCCESS:
            return {...state, loader: false, user: action.payload};
        case types.GET_USERS_BY_USERNAME_FAIL:
            return {...state, loader: false, error: action.payload};
            
        case types.CREATE_USERS_REQUEST:
            return {...state, loader: true, error: null};
        case types.CREATE_USERS_SUCCESS:
            return {...state, loader: false, user: action.payload};
        case types.CREATE_USERS_FAIL:
            return {...state, loader: false, error: action.payload};

        case types.LOGOUT:
            return {...state, loader: false, error: null, user:null, updateUser:null}
    

        default:
            return state;
    }
}