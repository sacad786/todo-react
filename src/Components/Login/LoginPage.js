import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export class LoginPage extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
        }
    }
    handleTextChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    hanleLoginChange(){
        const username = {
            user_name: this.state.username,
        }
        if (!username) {
            return
        }
        this.props.dispatchUserRequest(username)
    }
    render() {
        return (
            <div>
                <form>
                    <TextField
                        name='username'
                        value={this.state.username}
                        onChange={this.handleTextChange.bind(this)}
                        label="Username"
                        variant="outlined"
                        style={{ textAlign: 'center', margin: "20px" }}
                    />
                    <br/>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.hanleLoginChange.bind(this)}
                    >
                    Login
                    </Button>
                </form>
            </div>
        )
    }
}

export default LoginPage
