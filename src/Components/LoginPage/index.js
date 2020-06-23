import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

export class LoginPage extends Component {
    constructor() {
        super()
        this.state = {
            userName: ''
        }
    }
    handleTextChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    hanleLoginChange(){
        const {userName} = this.state
            const user_name = userName
        
        if (!userName) {
            return
        }
        this.props.getUserRequested(user_name)
    }
    render() {
        return (
            <div className="App" style={{ margin: "10px" }}>
                <form>
                    <TextField
                        name="userName"
                        value={this.state.userName}
                        onChange={this.handleTextChange.bind(this)}
                        label="Username"
                        variant="outlined" 
                    />
                </form>
                <br/>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.hanleLoginChange.bind(this)}
                >
                    Login
                </Button>
            </div>
        )
    }
}

export default LoginPage
