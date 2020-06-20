import React, { Component } from 'react'
import DisplayTasks from '../../Components/DisplayTasks/DisplayTasks'
import { connect } from 'react-redux'
import CreateTaskForm from '../../Components/CreateTaskForm/CreateTaskForm'
import { createTaskRequest, updateTaskRequest, deleteTaskRequest, logoutRequest } from './action'
import { Dialog, DialogActions, Button } from '@material-ui/core'
import UpdateTaskForm from '../../Components/UpdateTaskForm/UpdateTaskForm'

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
    dispatchCreateTask(task) {
        task.userId = this.props.loginState.user.id
        task.username = this.props.loginState.user.user_name
        this.props.dispatch(createTaskRequest(task))
    }
    handleUpdateTasks(user) {
        this.setState({
            openDialog: true,
            updateTask: user
        })
    }
    dispatchUpdateTaskRequest(task) {
        task.userId = this.props.loginState.user.id
        task.username = this.props.loginState.user.user_name
        this.props.dispatch(updateTaskRequest(task))
    }
    handleCloseDialog() {
        this.setState({
            openDialog: true
        })
    }
    dispatchDeleteTasksRequest(taskId) {
        const task = {
            username: this.props.loginState.user.user_name,
            userId: this.props.loginState.user.id,
            id: taskId
        }
        this.props.dispatch(deleteTaskRequest(task))
    }
    render() {
        const tasks = this.props.loginState.user ? this.props.loginState.user.tasks : [];
        return (
            <div>
                <Button
                    onClick={() => { this.props.dispatch(logoutRequest()) }}
                    variant="contained"
                    color="secondary"
                    style={{float: 'right', marginTop: '10px'}}
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
                        task={this.state.updateTask}
                        dispatchUpdateTaskRequest={this.dispatchUpdateTaskRequest.bind(this)}
                    />
                </Dialog>
                <CreateTaskForm
                    dispatchCreateTask={this.dispatchCreateTask.bind(this)}
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
