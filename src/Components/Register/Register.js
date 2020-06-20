import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'

export class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            name: '',
            surname: '',
        }
    }
    clearForm() {
        this.setState({
            username: '',
            name: '',
            surname: ''       
        })
    }
    handleTextChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    hanleSumbitChange(){
        const {username, name, surname} = this.state
        const user = {
            user_name: username,
            first_name: name,
            last_name: surname,
        }
        if (!username || !name || !surname) {
            return
        }
        this.props.dispatchCreateUserRequest(user)
        this.clearForm()
    }
    render() {
        return (
            <div>
                <form>
                    <TextField
                        name="username"
                        value={this.state.username}
                        onChange={this.handleTextChange.bind(this)}
                        label="Username"
                        variant="outlined"
                        style={{ textAlign: 'center', margin: "10px" }}
                    />
                    <br/>
                    <TextField
                        name="name"
                        value={this.state.name}
                        onChange={this.handleTextChange.bind(this)}
                        label="Name"
                        variant="outlined"
                        style={{ textAlign: 'center', margin: "10px" }}
                    />
                    <br/>
                    <TextField
                        name="surname"
                        value={this.state.surname}
                        onChange={this.handleTextChange.bind(this)}
                        label="Surname"
                        variant="outlined"
                        style={{ textAlign: 'center', margin: "10px" }}
                    />
                    <br/>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.hanleSumbitChange.bind(this)}
                    >
                    Submit
                    </Button>
                </form>
            </div>
        )
    }
}

export default Register
