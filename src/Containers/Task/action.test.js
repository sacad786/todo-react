import * as types from '../../actionTypes'
import * as actions from './action'
const dummyRequest = "dummyRequest";
const dummyResponse = "dummyResponse";
const dummyError = "dummyError";

test('should return given type of GET_TASK_REQUEST', () => {
    expect(actions.getTaskRequest()).toEqual(
    {
        type: types.GET_TASK_REQUEST,
    })
});
test('should return given payload and type of GET_TASK_SUCCESS', () => {
    expect(actions.getTaskSuccess(dummyResponse)).toEqual(
        {
            type: types.GET_TASK_SUCCESS,
            payload: dummyResponse
        }
    );
});
test('should return given payload and type of GET_TASK_FAIL', () => {
    expect(actions.getTaskFail(dummyError)).toEqual(
        {
            type: types.GET_TASK_FAIL,
            payload: dummyError
        }
    );
});

test('should return given payload and type of CREATE_TASK_REQUEST', () => {
    expect(actions.createTaskRequest(dummyRequest)).toEqual(
        {
            type: types.CREATE_TASK_REQUEST,
            payload: dummyRequest
        }
    );
});
test('should return given payload and type of CREATE_TASK_SUCCESS', () => {
    expect(actions.createTaskSuccess(dummyResponse)).toEqual(
        {
            type: types.CREATE_TASK_SUCCESS,
            payload: dummyResponse
        }
    );
});
test('should return given payload and type of CREATE_TASK_FAIL', () => {
    expect(actions.createTaskFail(dummyError)).toEqual(
        {
            type: types.CREATE_TASK_FAIL,
            payload: dummyError
        }
    );
});

test('should return given payload and type of CREATE_TASK_REQUEST', () => {
    expect(actions.updateTaskRequest(dummyRequest)).toEqual(
        {
            type: types.UPDATE_TASK_REQUEST,
            payload: dummyRequest
        }
    );
});
test('should return given payload and type of UPDATE_TASK_SUCCESS', () => {
    expect(actions.updateTaskSuccess(dummyResponse)).toEqual(
        {
            type: types.UPDATE_TASK_SUCCESS,
            payload: dummyResponse
        }
    );
});
test('should return given payload and type of UPDATE_TASK_FAIL', () => {
    expect(actions.updateTaskFail(dummyError)).toEqual(
        {
            type: types.UPDATE_TASK_FAIL,
            payload: dummyError
        }
    );
});

test('should return given payload and type of CREATE_TASK_REQUEST', () => {
    expect(actions.deleteTaskRequest(dummyRequest)).toEqual(
        {
            type: types.DELETE_TASK_REQUEST,
            payload: dummyRequest
        }
    );
});
test('should return given payload and type of DELETE_TASK_SUCCESS', () => {
    expect(actions.deleteTaskSuccess(dummyResponse)).toEqual(
        {
            type: types.DELETE_TASK_SUCCESS,
            payload: dummyResponse
        }
    );
});
test('should return given payload and type of DELETE_TASK_FAIL', () => {
    expect(actions.deleteTaskFail(dummyError)).toEqual(
        {
            type: types.DELETE_TASK_FAIL,
            payload: dummyError
        }
    );
});
