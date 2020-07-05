import * as types from '../../actionTypes'
import loginReducer, { initialState } from './reducer'
import * as actions from './action';
 
it('should return an object', () => {
    expect(loginReducer(initialState, actions.getUsernameRequest('sa'))).toEqual(
        {...initialState, loader: true, error: null} 
    )
})

it('should return an object', () => {
    expect(loginReducer(initialState, actions.getUserNameSuccess('sa'))).toEqual({
        ...initialState, loader: false, user: 'sa'
    })
})

it('should return an object', () => {
    expect(loginReducer(initialState, actions.getUsernameFail('sa'))).toEqual({
        ...initialState, loader: false, error: 'sa'
    })
})

it('should return an object', () => {
    expect(loginReducer(initialState, actions.createUserRequest('sa'))).toEqual(
        {...initialState, loader: true, error: null} 
    )
})

it('should return an object', () => {
    expect(loginReducer(initialState, actions.createUserSuccess('sa'))).toEqual({
        ...initialState, loader: false, user: 'sa'
    })
})

it('should return an object', () => {
    expect(loginReducer(initialState, actions.createUserFail('sa'))).toEqual({
        ...initialState, loader: false, createUserError: 'sa'
    })
})

it('should return an object', () => {
    expect(loginReducer(initialState, actions.logoutRequest())).toEqual({
        ...initialState, loader: false, user: null, error: null
    })
})


