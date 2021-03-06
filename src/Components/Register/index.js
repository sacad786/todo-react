import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

export class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            name: '',
            surname: '',
        }
    }
    handleTextChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleRegisterChange(){
        const {username, name, surname} = this.state
        const user = {
            user_name: username,
            first_name: name,
            last_name: surname
        }
        if (!username || !name || !surname) {
            return
        }
        this.props.dispatchCreateUserRequest(user)
    }
    render() {
        return (
            <div className="App" style={{ margin: "10px" }}>
                <form>
                    <TextField
                        className="usernameTextField"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleTextChange.bind(this)}
                        label="Username"
                        variant="outlined"
                        style={{ margin: "10px" }} 
                    />
                    <br/>
                    <TextField
                        className="usernameTextField"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleTextChange.bind(this)}
                        label="name"
                        variant="outlined"
                        style={{ margin: "10px" }} 
                    />
                    <br/>

                    <TextField
                        className="usernameTextField"
                        name="surname"
                        value={this.state.surname}
                        onChange={this.handleTextChange.bind(this)}
                        label="surname"
                        variant="outlined"
                        style={{ margin: "10px" }} 
                    />
                </form>
                <br />
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.handleRegisterChange.bind(this)}
                    className="register-btn"
                >
                    Register
                </Button>
            </div>
        )
    }
}

export default Register
