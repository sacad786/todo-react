import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTasksRequest, updateTasksRequest, deleteTasksRequest} from './action'
import { Dialog, DialogActions, Button } from '@material-ui/core'
import DisplayTasks from '../../Components/DisplayTasks'
import CreateTaskForm from '../../Components/CreateTaskForm'
import UpdateTaskForm from '../../Components/UpdateTaskForm'
import { logoutRequest } from '../Login/action';

export class Tasks extends Component {
    constructor() {
        super()
        this.state = {
            openDialog: false,
            firstname: '',
            lastname: '',
            updateTask: null,
            deleteTasksWarning: false,
            deleteTasksId: null,
        }
    }
    componentWillMount() {
        if(this.props.loginState.user === null){
            this.props.history.push('/')
        }
    }

    componentDidUpdate() {
        if(this.props.loginState.user === null){
            this.props.history.push('/')
        }
    }

    handleUpdateTasks(user) {
        this.setState({
            openDialog: true,
            updateTask: user
        })
    }

    handleCloseDialog() {
        this.setState({
            openDialog: false
        })
    }

    dispatchTasksRequest(task) {
        task.userId = this.props.loginState.user.id
        task.username = this.props.loginState.user.user_name
        this.props.dispatch(createTasksRequest(task))
    }

    dispatchUpdateTasksRequest(task) {
        task.userId = this.props.loginState.user.id
        task.taskId = this.props.loginState.user.tasks[0].id
        this.props.dispatch(updateTasksRequest(task))
        this.handleCloseDialog()
    }

    dispatchDeleteTasksRequest(task) {
        task.userId = this.props.loginState.user.id
        task.taskId = this.props.loginState.user.tasks[0].id
        this.props.dispatch(deleteTasksRequest(task))
    }

    render() {
        const tasks = this.props.loginState.user ? this.props.loginState.user.tasks : [];
        

        return (
            <div>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={()=>{ this.props.dispatch(logoutRequest())}}
                >logout</Button>
                {
                    this.props.loginState.user ? <h1 style={{textAlign: 'center'}}> Hi {this.props.loginState.user.first_name} {this.props.loginState.user.last_name}, Welcome to your tasks page</h1> : ''
                }
                <Dialog fullWidth onClose={this.handleCloseDialog.bind(this)} open={this.state.openDialog}>
                    <DialogActions>
                        <Button onClick={this.handleCloseDialog.bind(this)}>x</Button>
                    </DialogActions>
                    <UpdateTaskForm
                        tasks={this.state.updateTask}
                        dispatchUpdateTasksRequest={this.dispatchUpdateTasksRequest.bind(this)}
                    />
                </Dialog>
               
                <CreateTaskForm
                    dispatchTasksRequest={this.dispatchTasksRequest.bind(this)}
                /> 
                <DisplayTasks
                    tasksdata={tasks}
                    handleUpdateTasks={this.handleUpdateTasks.bind(this)}
                    deleteTasksRequest={this.dispatchDeleteTasksRequest.bind(this)}
                />
              
            </div>
        )
    }
}

export default
 connect(state => ({
    tasksState: state.tasks,
    loginState: state.login,
}))
(Tasks)
