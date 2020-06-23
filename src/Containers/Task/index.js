import React, { Component } from 'react'
import DisplayTasks from '../../Components/DisplayTasks'
import { connect } from 'react-redux'
import CreateTaskForm from '../../Components/CreateTaskForm'
import { createTaskRequest, updateTaskRequest, deleteTaskRequest } from './action'
import UpdateTaskForm from '../../Components/UpdateTaskForm'
import { logoutRequest } from '../Login/action'
import { Dialog, DialogActions, Button } from '@material-ui/core'

export class Tasks extends Component {
    constructor() {
        super()
        this.state = {
            openDialog: false,
            updateTask: null,
        }
    }
    componentWillMount() {
        if (this.props.loginState.user === null) {
            this.props.history.push('/')
        }
    }
    componentDidUpdate() {
        if (this.props.loginState.user === null) {
            this.props.history.push('/')
        }
    }
    handleUpdateTasks(task) {
        this.setState({
            openDialog: true,
            updateTask: task
        })
    }
    handleCloseDialog() {
        this.setState({
            openDialog: false
        })
    }
    dispatchCreateTaskRequest(task) {
        task.userId = this.props.loginState.user.id
        task.username = this.props.loginState.user.user_name
        this.props.dispatch(createTaskRequest(task))
    }
    dispatchUpdateTaskRequest(task) {
        task.userId = this.props.loginState.user.id
        task.username = this.props.loginState.user.user_name
        this.props.dispatch(updateTaskRequest(task))
        this.handleCloseDialog()
    }
    dispatchDeleteTasksRequest(taskId) {
        const task = {
            userId: this.props.loginState.user.id,
            username: this.props.loginState.user.user_name,
            id: taskId
        }
        this.props.dispatch(deleteTaskRequest(task))
    }
    
    render() {
        const tasks = this.props.loginState.user ? this.props.loginState.user.tasks : []
        return (
            <div>
                <Button
                    onClick={() => { this.props.dispatch(logoutRequest()) }}
                    variant="contained"
                    color="secondary"
                    style={{ float: 'right', marginTop: '10px' }}
                >logout
                </Button>
                {
                    this.props.loginState.user ? <h1 style={{ textAlign: 'center' }}> hey {this.props.loginState.user.first_name} {this.props.loginState.user.last_name}, Welcome to your tasks page</h1> : ''
                }
                <Dialog fullWidth onClose={this.handleCloseDialog.bind(this)} open={this.state.openDialog}>
                    <DialogActions>
                        <Button onClick={this.handleCloseDialog.bind(this)}>x</Button>
                    </DialogActions>
                    <UpdateTaskForm
                        tasks={this.state.updateTask}
                        dispatchUpdateTaskRequest={this.dispatchUpdateTaskRequest.bind(this)}
                    />
                </Dialog>

                <CreateTaskForm
                    dispatchCreateTaskRequest={this.dispatchCreateTaskRequest.bind(this)}
                />
                <DisplayTasks
                    tasks={tasks}
                    handleUpdateTasks={this.handleUpdateTasks.bind(this)}
                    dispatchDeleteTasksRequest={this.dispatchDeleteTasksRequest.bind(this)}
                />
            </div>
        )
    }
}

export default connect(state => ({
    tasksState: state.tasks,
    loginState: state.login
}))(Tasks)
