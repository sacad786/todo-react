import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTasksRequest, createTasksRequest, updateTasksRequest, deleteTasksRequest, resetTasksError } from './action'
import { Dialog, DialogActions, Button } from '@material-ui/core'
import SweetAlert from 'react-bootstrap-sweetalert';
import { DeleteBtnStyle, confirmBtnStyle, cancelBtnStyle } from '../../styles'
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

//     handleDeleteTasksWarning(userId) {
//         this.setState({
//             deleteTasksWarning: true,
//             deleteTasksId: userId
//         })
//     }

//     resetApiErrors() {
//         this.props.dispatch(resetTasksError())
//         this.setState({
//             deleteTasksWarning: false
//         })
//     }

    dispatchTasksRequest(task) {
        task.userId = this.props.loginState.user.id
        task.username = this.props.loginState.user.user_name
        this.props.dispatch(createTasksRequest(task))
    }

    dispatchUpdateTasksRequest(user) {
        this.props.dispatch(updateTasksRequest(user))
        this.handleCloseDialog()
    }

//     deleteTasksRequest(userId) {
//         this.props.dispatch(deleteTasksRequest(userId))
//         this.setState({
//             deleteTasksWarning: false
//         })
//     }

//     deleteTasksAlert() {
//         return <SweetAlert
//             warning
//             showCancel
//             confirmBtnText="Yes, delete it!"
//             confirmBtnStyle={DeleteBtnStyle}
//             cancelBtnStyle={cancelBtnStyle}
//             title="Are you sure?"
//             onConfirm={this.deleteTasksRequest.bind(this, this.state.deleteTasksId)}
//             onCancel={this.resetApiErrors.bind(this)}
//             focusCancelBtn
//         />
//     }

//    tasksCreatedSuccessAlert() {
//         return <SweetAlert
//             success
//             title="task created"
//             onConfirm={this.resetApiErrors.bind(this)}
//             confirmBtnStyle={confirmBtnStyle}
//         ></SweetAlert>
//     }
//    tasksCreatedUnSuccessfullyAlert() {
//         return <SweetAlert
//             danger
//             title={this.props.tasksState.error}
//             onConfirm={this.resetApiErrors.bind(this)}
//             confirmBtnStyle={DeleteBtnStyle}
//             confirmBtnText="try again!"
//         />
//     }
//    tasksDeletedSuccessAlert() {
//         return <SweetAlert
//             success
//             title="task deleted successfully"
//             onConfirm={this.resetApiErrors.bind(this)}
//             confirmBtnStyle={confirmBtnStyle}
//         ></SweetAlert>
//     }
//    tasksUpdatedSuccessAlert() {
//         return <SweetAlert
//             success
//             title="task updated"
//             onConfirm={this.resetApiErrors.bind(this)}
//             confirmBtnStyle={confirmBtnStyle}
//         ></SweetAlert>
//     }

    render() {
        const tasks = this.props.loginState.user ? this.props.loginState.user.tasks : [];
        // const tasks = this.props.tasksState.tasks || [];
        console.log(tasks);
        

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
                    // handleDeleteTasksWarning={this.handleDeleteTasksWarning.bind(this)}
                />
                {/* {this.state.deleteTasksWarning ? this.deleteTasksAlert() : ''}
                {this.props.tasksState.deleteUser ? this.tasksDeletedSuccessAlert() : ''}
                {this.props.tasksState.task ? this.tasksCreatedSuccessAlert() : ''}
                {this.props.tasksState.error ? this.tasksCreatedUnSuccessfullyAlert() : ''}
                {this.props.tasksState.updateTask ? this.tasksUpdatedSuccessAlert() : ''} */}
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
