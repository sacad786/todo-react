import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'

export class CreateTaskForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
        }
    }
    handleTextChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    clearForm(){
        this.setState({
            name:  "" ,
            description: "" ,
        })
    }
    handleSubmitChange(){
        const {name, description} = this.state
        const task = {
            name,
            description,
        }
        if (!name || !description) {
            return
        }
        this.props.dispatchCreateTaskRequest(task)
        this.clearForm()
    }
    render() {
        return (
            <div className="App" >
                    <TextField
                        name="name"
                        value={this.state.name}
                        onChange={this.handleTextChange.bind(this)}
                        label="name"
                        variant="outlined"
                        style={{ margin: "10px" }} 
                        size="medium"
                        className="createTextField"
                    />
                    <TextField
                        name="description"
                        value={this.state.description}
                        onChange={this.handleTextChange.bind(this)}
                        label="description"
                        variant="outlined"
                        style={{ margin: "10px" }} 
                        size="medium"
                        className="createTextField"
                    />
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.handleSubmitChange.bind(this)}
                    style={{ margin: "10px" }} 
                    size="large"
                    className=".submit-btn"
                >
                    Submit
                </Button>
            </div>
        )
    }
}

export default CreateTaskForm
