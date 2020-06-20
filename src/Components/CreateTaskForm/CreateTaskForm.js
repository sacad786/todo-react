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
    hanleSumbitChange(){
        const {name, description} = this.state
        const task = {
            name,
            description,
        }
        if (!name) {
            return
        }
        console.log(task);
        
        this.props.dispatchCreateTask(task)
        this.clearForm()
    }
    render() {
        return (
            <div>
                <form>
                    <TextField
                        name="name"
                        value={this.state.name}
                        onChange={this.handleTextChange.bind(this)}
                        label="name"
                        variant="outlined"
                        style={{ textAlign: 'center', margin: "10px" }}
                    />
                    <TextField
                        name="description"
                        value={this.state.description}
                        onChange={this.handleTextChange.bind(this)}
                        label="description"
                        variant="outlined"
                        style={{ textAlign: 'center', margin: "10px" }}
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.hanleSumbitChange.bind(this)}
                        style={{ textAlign: 'center', margin: "10px" }}
                        size = 'large'
                    >
                        Submit
            </Button>
                </form>
            </div>
        )
    }
}

export default CreateTaskForm


