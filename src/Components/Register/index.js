import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'

export class Register extends Component {
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
        const {username, firstname, lastname} = this.state
        const user = {
        user_name: username,
        first_name: firstname,
        last_name: lastname
        }
        if (!username || !firstname || !lastname) {
            return
        }
        this.props.dispatchUserRequest(user)
        this.clearForm()
    }
    render() {
        return (
            <div>
                <h1 align="center">Register</h1>
                <form align="center">
                    <TextField
                        id="outlined-basic"
                        name="firstname"
                        value={this.state.firstname}
                        onChange={this.handleTextChange.bind(this)}
                        label="firstname"
                        variant="outlined"
                        style={{ padding:"10px"}}
                        size="small"
                    />
                    <TextField
                        id="outlined-basic"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={this.handleTextChange.bind(this)}
                        label="lastname"
                        variant="outlined"
                        style={{ padding:"10px"}}
                        size="small"
                    />
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
                    
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.handleFormChange.bind(this)}
                        style={{ marginTop:"9px"}}
                        size="large"
                    >
                        Register 
                    </Button>
                </form>
            </div>
        )
    }
}

export default Register
