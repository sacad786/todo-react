import * as types from '../../actionTypes'

export function getUsersByUsernameRequest(username) {
    return {
        type:types.GET_USERS_BY_USERNAME_REQUEST,
        payload:username
    }
}
export function getUsersByUsernameSuccess(response) {
    return {
        type:types.GET_USERS_BY_USERNAME_SUCCESS,
        payload:response
    }
}
export function getUsersByUsernameFail(error) {
    return {
        type:types.GET_USERS_BY_USERNAME_FAIL,
        payload:error
    }
}


export function createUsersRequest(user) {
    return {
        type:types.CREATE_USERS_REQUEST,
        payload:user
    }
}
export function createUsersSuccess(response) {
    return {
        type:types.CREATE_USERS_SUCCESS,
        payload:response
    }
}
export function createUsersFail(error) {
    return {
        type:types.CREATE_USERS_FAIL,
        payload:error
    }
}

export function logoutRequest() {
    return {
        type: types.LOGOUT,
    }
}