import React, { Component } from 'react'
import LoginPage from '../../Components/LoginPage'
import { getUsersByUsernameRequest } from './action'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'
import Register from '../../Components/Register'
import CreateUserForm from '../../Components/CreateUserForm'
import { createUsersRequest } from '../Login/action'
import DisplayTasks from '../../Components/DisplayTasks'

export class Login extends Component {
    constructor(props) {
        super()
        this.state = {
            showLogin: true
        }
    }

    componentDidUpdate() {
        if (this.props.loginState.user) {
            this.props.history.push("/tasks")
        }
    }
    
    componentWillMount() {
        if (this.props.loginState.user) {
            this.props.history.push("/tasks")
        }
    }

    routeChange() {
        this.setState({
            showLogin: false
        })
    }

    dispatchUserByUsernameRequest(username) {
        this.props.dispatch(getUsersByUsernameRequest(username))
    }

    dispatchUserRequest(user) {
        this.props.dispatch(createUsersRequest(user))
    }

    render() {
        return (
            <div>
                <div style={{ textAlign: 'center', margin: "20px" }}>
                    <Button
                        style={{ margin: "20px" }}
                        variant={!this.state.showLogin ? "contained" : "outlined"}
                        color="secondary"
                        onClick={() => { this.setState({ showLogin: false }) }}
                    >Register</Button>
                    <Button
                        variant={this.state.showLogin ? "contained" : "outlined"}
                        color="secondary"
                        onClick={() => { this.setState({ showLogin: true }) }}
                    >Sign In</Button>
                </div>
                {this.state.showLogin ? 
                <LoginPage
                    dispatchUserByUsernameRequest={this.dispatchUserByUsernameRequest.bind(this)}
                /> :
                    <CreateUserForm
                        dispatchUserRequest={this.dispatchUserRequest.bind(this)}
                    />
                }
            </div>
        )
    }
}

export default connect(state => ({
    loginState: state.login,
    usersState: state.users
}))(Login)

