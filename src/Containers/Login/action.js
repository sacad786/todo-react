import * as types from '../../actionTypes' 

export function getUsernameRequest(username) {
    return {
        type: types.GET_USERNAME_REQUEST,
        payload: username
    }
}
export function getUserNameSuccess(response) {
    return {
        type: types.GET_USERNAME_SUCCESS,
        payload: response
    }
}
export function getUsernameFail(error) {
    return {
        type: types.GET_USERNAME_FAIL,
        payload: error
    }
}

export function createUserRequest(user) {
    return {
        type: types.CREATE_USER_REQUEST,
        payload: user
    }
}
export function createUserSuccess(response) {
    return {
        type: types.CREATE_USER_SUCCESS,
        payload: response
    }
}
export function createUserFail(error) {
    return {
        type: types.CREATE_USER_FAIL,
        payload: error
    }
}

export function logoutRequest() {
    return {
        type: types.LOGOUT,
    }
}