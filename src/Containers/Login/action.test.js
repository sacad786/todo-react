import * as types from '../../actionTypes'
import * as actions from './action';
const dummyRequest = "dummyRequest";
const dummyResponse = "dummyResponse";
const dummyError = "dummyError";

  test('should return given payload and type of GET_USERNAME_REQUEST', () => {
    expect(actions.getUsernameRequest(dummyRequest)).toEqual(
        {
            type: types.GET_USERNAME_REQUEST,
            payload: dummyRequest
        }
    );
  });

  test('should return given payload and type of getUsernamesuccess', ()=> {
    expect(actions.getUserNameSuccess(dummyResponse)).toEqual({
        type: types.GET_USERNAME_SUCCESS,
        payload: dummyResponse
    })
})

test('should return given payload and type of getUsernamefail', () => {
    expect(actions.getUsernameFail(dummyError)).toEqual({
        type: types.GET_USERNAME_FAIL,
        payload: dummyError
    })
})
test('should return given payload and type of createUserRequest', () => {
    expect(actions.createUserRequest(dummyRequest)).toEqual({
        type: types.CREATE_USER_REQUEST,
        payload: dummyRequest
    })
})
test('should return given payload and type of createUsersuccess', () => {
    expect(actions.createUserSuccess(dummyResponse)).toEqual({
        type: types.CREATE_USER_SUCCESS,
        payload: dummyResponse
    })
})
test('should return given payload and type of createUserfail', () => {
    expect(actions.createUserFail(dummyError)).toEqual({
        type: types.CREATE_USER_FAIL,
        payload: dummyError
    })
})
test('should type of logoutRequest', () => {
    expect(actions.logoutRequest()).toEqual({
        type: types.LOGOUT,
    })
})
