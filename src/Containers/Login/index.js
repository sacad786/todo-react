import React, { Component } from 'react'
import LoginPage from '../../Components/LoginPage/index'
import Register from '../../Components/Register'
import { createUserRequest, getUsernameRequest } from './action'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'

export class Login extends Component {
    constructor() {
        super()
        this.state = {
            login: true
        }
    }
    componentWillMount(){
        if (this.props.loginState.user) {
            this.props.history.push('/tasks')
        }
    }
    componentDidUpdate() {
        if (this.props.loginState.user) {
            this.props.history.push('/tasks')
        }
    }
    dispatchCreateUserRequest(user){
        this.props.dispatch(createUserRequest(user))
    }
    getUserRequested(username){
        this.props.dispatch(getUsernameRequest(username))
    }
    render() {
        return (
            <div className="App" >
                <Button
                    style={{ margin: "10px" }}
                    variant={this.state.login ? "contained" : "outlined"}
                    color="secondary"
                    onClick={() => { this.setState({ login: true }) }}
                >
                    Sign In
                </Button>
                <Button
                    style={{ margin: "10px" }}
                    variant={!this.state.login ? "contained" : "outlined"}
                    color="secondary"
                    onClick={() => { this.setState({ login: false }) }}
                >
                    Register
                </Button>
                <div>
                {this.props.loginState.error ? <p style={{ color: "red"}}>{this.props.loginState.error + " Please register"}</p>: ''}
                {this.props.loginState.ddd ? <p style={{ color: "green"}}>{this.props.loginState.ddd + " Please register"}</p>: ''}
                <br/>
                </div>
                {this.state.login
                 ?<LoginPage
                    getUserRequested={this.getUserRequested.bind(this)}
                 />
                 :<Register
                    dispatchCreateUserRequest = {this.dispatchCreateUserRequest.bind(this)}
                />
                }
            </div>
        )
    }
}

export default connect (state => ({
    loginState: state.login,
})) (Login)
