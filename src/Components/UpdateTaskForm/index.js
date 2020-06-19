import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'

export class UpdateTaskForm extends Component {
    constructor(props) {
        super()
        this.state = {
            name: null,
            description: null,
            showUpdateError: false
        }
    }
    handleTextChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleFormChange(){
        const {name, description, } = this.state
        const task = {
            name,
            description,
            id: this.props.tasks.id
        }

        if (!name && !description) {
            return this.setState({ 
                showUpdateError: true
            })
        }

        this.props.dispatchUpdateTasksRequest(task)
    }
  
    render() {
        return (
            <div>
                <p style={{color: 'red', textAlign: 'center' , display: (this.state.showUpdateError) ? 'block' : 'none'}}>task not updated</p>
                <form align="center" style={{ margin: "5%"}}>
                    <TextField
                        id="outlined-basic"
                        name="name"
                        value={this.state.name === null ? this.props.tasks.name : this.state.name}
                        onChange={this.handleTextChange.bind(this)}
                        label="Name"
                        variant="outlined"
                    />
                    <br/><br/>
                    <TextField
                        id="outlined-basic"
                        name="description"
                        value={this.state.description === null ? this.props.tasks.description : this.state.description}
                        onChange={this.handleTextChange.bind(this)}
                        label="Description"
                        variant="outlined"
                    />
                    <br/><br/>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.handleFormChange.bind(this)}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}

export default UpdateTaskForm