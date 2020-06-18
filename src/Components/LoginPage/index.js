import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'
import { connect } from 'react-redux'

export class LoginPage extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
        }
    }
    handleTextChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    clearForm(){
        this.setState({
            userName:  "" ,
        })
    }

    handleFormChange(){
        const {userName} = this.state
        let user_name = userName
        if (!userName || this.props.loginState.user) {
            return
        }
        this.props.dispatchUserByUsernameRequest(user_name)
        this.clearForm()
    }
    render() {
        return (
            <div>
                <h1 align="center">Log In</h1>
                <div align="center">
                    <p style={{color:"red", display: (this.props.loginState.error) ? 'block' : 'none' }}>{this.props.loginState.error}</p>
                    <TextField
                        id="outlined-basic"
                        name="userName"
                        value={this.state.userName}
                        onChange={this.handleTextChange.bind(this)}
                        label="Username"
                        variant="outlined"
                        style={{ padding:"10px"}}
                        size="small"
                    />
                    <br/>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.handleFormChange.bind(this)}
                        style={{ marginTop:"9px"}}
                        size="large"
                    >
                        Log In
                    </Button>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    loginState: state.login
}))(LoginPage) 
