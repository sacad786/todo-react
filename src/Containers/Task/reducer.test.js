import * as types from '../../actionTypes'
import tasksReducer, { initialState } from './reducer'
import * as actions from './action';
 
it('should return an object', () => {
    expect(tasksReducer(initialState, actions.getTaskRequest('sa'))).toEqual(
        {...initialState, loader: true, error: null} 
    )
})

it('should return an object', () => {
    expect(tasksReducer(initialState, actions.getTaskSuccess('sa'))).toEqual({
        ...initialState, loader: false, task: 'sa'
    })
})

it('should return an object', () => {
    expect(tasksReducer(initialState, actions.getTaskFail('sa'))).toEqual({
        ...initialState, loader: false, error: 'sa'
    })
})

it('should return an object', () => {
    expect(tasksReducer(initialState, actions.createTaskRequest('sa'))).toEqual(
        {...initialState, loader: true, error: null} 
    )
})

it('should return an object', () => {
    expect(tasksReducer(initialState, actions.createTaskSuccess('sa'))).toEqual({
        ...initialState, loader: false, task: 'sa'
    })
})

it('should return an object', () => {
    expect(tasksReducer(initialState, actions.createTaskFail('sa'))).toEqual({
        ...initialState, loader: false, error: 'sa'
    })
})

it('should return an object', () => {
    expect(tasksReducer(initialState, actions.updateTaskRequest('sa'))).toEqual(
        {...initialState, loader: true, error: null} 
    )
})

it('should return an object', () => {
    expect(tasksReducer(initialState, actions.updateTaskSuccess('sa'))).toEqual({
        ...initialState, loader: false, updateTask: 'sa'
    })
})

it('should return an object', () => {
    expect(tasksReducer(initialState, actions.updateTaskFail('sa'))).toEqual({
        ...initialState, loader: false, error: 'sa'
    })
})

it('should return an object', () => {
    expect(tasksReducer(initialState, actions.deleteTaskRequest('sa'))).toEqual(
        {...initialState, loader: true, error: null} 
    )
})

it('should return an object', () => {
    expect(tasksReducer(initialState, actions.deleteTaskSuccess('sa'))).toEqual({
        ...initialState, loader: false, deleteTask: 'sa'
    })
})

it('should return an object', () => {
    expect(tasksReducer(initialState, actions.deleteTaskFail('sa'))).toEqual({
        ...initialState, loader: false, error: 'sa'
    })
})

