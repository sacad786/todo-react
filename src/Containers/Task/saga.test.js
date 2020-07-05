import * as types from '../../actionTypes'
import { getTask, createTask, updateTask, deleteTask } from '../../requests';
import { getTaskSuccess, getTaskFail, createTaskSuccess, createTaskFail, updateTaskSuccess, updateTaskFail, deleteTaskSuccess, deleteTaskFail, getTaskRequest, createTaskRequest, updateTaskRequest, deleteTaskRequest } from './action';
import * as saga from './saga'
import {take , call, put} from 'redux-saga/effects'
import {getUsernameRequest } from '../Login/action'


describe('sagaTestsForGetTasksSaga', () => {
    test('happy case', () => {
        const generator = saga.getTasksSaga()
        expect(generator.next(types.GET_TASK_REQUEST).value
        ).toEqual(take(types.GET_TASK_REQUEST))

        expect(generator.next(getTaskRequest()).value)
            .toEqual(call(getTask))

        expect(generator.next("dummyPayload").value)
            .toEqual(put(getTaskSuccess()))
    })

    test('worst case', () => {
        const generator = saga.getTasksSaga()
        expect(generator.next(types.GET_TASK_REQUEST).value
        ).toEqual(take(types.GET_TASK_REQUEST))

        expect(generator.next(getTaskRequest()).value)
            .toEqual(call(getTask))

        expect(generator.throw().value)
            .toEqual(put(getTaskFail()))
    })
})

describe('sagaTestsForCreateTasksSaga', () => {
    test('happy case', () => {
        const generator = saga.createTaskSaga()
        expect(generator.next(types.CREATE_TASK_REQUEST).value
        ).toEqual(take(types.CREATE_TASK_REQUEST))

        expect(generator.next(createTaskRequest('dummyPayload')).value)
            .toEqual(call(createTask, 'dummyPayload'))

        const response = {
            name:"dummyPayload"
        }
        expect(generator.next(response).value)
            .toEqual(put(createTaskSuccess(response.name)))
        
        expect(generator.next().value)
        .toEqual(put(getUsernameRequest()))
    })

    test('worst case', () => {
        const generator = saga.createTaskSaga()
        expect(generator.next(types.CREATE_TASK_REQUEST).value
        ).toEqual(take(types.CREATE_TASK_REQUEST))

        expect(generator.next(createTaskRequest('dummyPayload')).value)
            .toEqual(call(createTask, 'dummyPayload'))

        const mockResponse = {
            response: {
                data: "dummyPayload"
            }
        }     

        expect(generator.throw(mockResponse).value)
            .toEqual(put(createTaskFail(mockResponse.response.data)))
    })
})

describe('sagaTestsForUpdateTaskSaga', () => {
    test('happy case', () => {
        const generator = saga.updateTaskSaga()
        expect(generator.next(types.UPDATE_TASK_REQUEST).value
        ).toEqual(take(types.UPDATE_TASK_REQUEST))

        expect(generator.next(updateTaskRequest('dummyPayload')).value)
            .toEqual(call(updateTask, 'dummyPayload'))

        const response = {
            name:"dummyPayload"
        }
        expect(generator.next(response).value)
            .toEqual(put(updateTaskSuccess(response.name)))

        expect(generator.next().value)
        .toEqual(put(getUsernameRequest()))
    })

    test('worst case', () => {
        const generator = saga.updateTaskSaga()
        expect(generator.next(types.UPDATE_TASK_REQUEST).value
        ).toEqual(take(types.UPDATE_TASK_REQUEST))

        expect(generator.next(updateTaskRequest('dummyPayload')).value)
            .toEqual(call(updateTask, 'dummyPayload'))


        expect(generator.throw("mockResponse").value)
            .toEqual(put(updateTaskFail("mockResponse")))
    })
})

describe('sagaTestsForDeleteTaskSaga', () => {
    test('happy case', () => {
        const generator = saga.deleteTaskSaga()
        expect(generator.next(types.DELETE_TASK_REQUEST).value
        ).toEqual(take(types.DELETE_TASK_REQUEST))

        expect(generator.next(deleteTaskRequest('dummyPayload')).value)
            .toEqual(call(deleteTask, 'dummyPayload'))

        const response = {
            name:"dummyPayload"
        }
        expect(generator.next(response).value)
            .toEqual(put(deleteTaskSuccess(response.name)))

        expect(generator.next().value)
        .toEqual(put(getUsernameRequest()))
    })

    test('worst case', () => {
        const generator = saga.deleteTaskSaga()
        expect(generator.next(types.DELETE_TASK_REQUEST).value
        ).toEqual(take(types.DELETE_TASK_REQUEST))

        expect(generator.next(deleteTaskRequest('dummyPayload')).value)
            .toEqual(call(deleteTask, 'dummyPayload'))


        expect(generator.throw("mockResponse").value)
            .toEqual(put(deleteTaskFail("mockResponse")))
    })
})

