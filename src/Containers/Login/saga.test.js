import * as types from '../../actionTypes'
import { take, call, put } from 'redux-saga/effects'
import * as saga from './saga'
import * as actions from './action';
import { getUsername, createUser } from '../../requests'



describe('sagaTestsForLogin', () => {
    test('happy case ', () => {
        const generator = saga.LoginSaga()
        expect(generator.next(types.GET_USERNAME_REQUEST).value
        ).toEqual(take(types.GET_USERNAME_REQUEST))

        expect(generator.next(actions.getUsernameRequest("dummyPayload")).value)
            .toEqual(call(getUsername, "dummyPayload"))

        expect(generator.next("dummyPayload").value)
            .toEqual(put(actions.getUserNameSuccess()))
    })

    test('worst case ', () => {
        const generator = saga.LoginSaga()
        expect(generator.next(types.GET_USERNAME_REQUEST).value
        ).toEqual(take(types.GET_USERNAME_REQUEST))

        expect(generator.next(actions.getUsernameRequest("dummyPayload")).value)
            .toEqual(call(getUsername, "dummyPayload"))

        const mockResponse = {
            response: {
                data: "dummyPayload"
            }
        }
        expect(generator.throw(mockResponse).value)
            .toEqual(put(actions.getUsernameFail(mockResponse.response.data)))
    })
})

describe('sagaTestsForRegister', () => {
    test('happy case', () => {
        const generator = saga.RegisterSaga()
        expect(generator.next(types.CREATE_USER_REQUEST).value
        ).toEqual(take(types.CREATE_USER_REQUEST))

        expect(generator.next(actions.createUserRequest("dummyPayload")).value)
            .toEqual(call(createUser, "dummyPayload"))

        expect(generator.next("dummyPayload").value)
            .toEqual(put(actions.createUserSuccess()))
    })

    test('worst case', () => {
        const generator = saga.RegisterSaga()
        expect(generator.next(types.CREATE_USER_REQUEST).value
        ).toEqual(take(types.CREATE_USER_REQUEST))

        expect(generator.next(actions.createUserRequest("dummyPayload")).value)
            .toEqual(call(createUser, "dummyPayload"))

        const mockResponse = {
            response: {
                data: "dummyPayload"
            }
        }

        expect(generator.throw(mockResponse).value)
            .toEqual(put(actions.createUserFail(mockResponse.response.data)))
    })
})

