import React, { Component } from 'react'
import LoginPage from '../../Components/Login/LoginPage'
import Register from '../../Components/Register/Register'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { getUserNameRequest, createUserRequest } from './action'

export class Login extends Component {
    constructor() {
        super()
        this.state = {
            showLogin: true
        }
    }

    componentWillMount(){
        if(this.props.loginState.user){
            this.props.history.push('/tasks')
        }
    }

    componentDidUpdate(){
        if(this.props.loginState.user){
            this.props.history.push('/tasks')
        }
    }
    
    dispatchUserRequest(username) {
        this.props.dispatch(getUserNameRequest(username))
    }

    dispatchCreateUserRequest(user){
        this.props.dispatch(createUserRequest(user))
    }

    render() {
        return (
            <div>
                <Button
                    variant={this.state.showLogin ? "outlined" : "contained"}
                    color="secondary"
                    style={{ textAlign: 'center', margin: "20px" }}
                    onClick={() => this.setState({showLogin: false})}
                >
                    Register
                    </Button>
                <Button
                    variant={this.state.showLogin ? "contained" : "outlined"}
                    color="secondary"
                    onClick={() => this.setState({showLogin: true})}
                >
                    Sign In
                    </Button>
                {this.state.showLogin ?
                    <LoginPage
                        dispatchUserRequest = {this.dispatchUserRequest.bind(this)}  
                    /> :
                    <Register
                        dispatchCreateUserRequest={this.dispatchCreateUserRequest.bind(this)}
                    />
                }
            </div>
        )
    }
}

export default connect(state => ({
    loginState: state.login
}))(Login)
