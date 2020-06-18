import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'

export class CreateTaskForm extends Component {
    constructor(props) {
        super()
        this.state = {
            name: '',
            description: '',
        }
    }
    handleTextChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearForm(){
        this.setState({
            name:  "" ,
            description: "" ,
        })
    }

    handleFormChange(){
        const {name, description, } = this.state
        let task = {
            name,
            description
        }
       
        if (!name) {
            return
        }
        this.props.dispatchTasksRequest(task);
        this.clearForm()
    }
    render() {
        return (
            <div>
                <h1 align="center">Create Tasks</h1>
                <form align="center">
                    <TextField
                        id="outlined-basic"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleTextChange.bind(this)}
                        label="Name"
                        variant="outlined"
                        style={{ padding:"10px"}}
                        size="small"
                    />
                    <TextField
                        id="outlined-basic"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleTextChange.bind(this)}
                        label="Description"
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
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}

export default CreateTaskForm
