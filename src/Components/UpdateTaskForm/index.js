import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'

export class UpdateTaskForm extends Component {
    constructor() {
        super()
        this.state = {
            name: null,
            description: null,
            showUpdateError: false
        }
    }
    handleTextChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmitChange(){
        const {name, description} = this.state
        const task = {
            name,
            description,
            id: this.props.tasks.id
        }
        if (!name) {
            return this.setState({ 
                showUpdateError: true
            })
        }
        this.props.dispatchUpdateTaskRequest(task)
    }
    render() {
        return (
            <div style={{ textAlign: 'center', margin: "10px" }}>
                <p style={{color: 'red', textAlign: 'center' , display: (this.state.showUpdateError) ? 'block' : 'none'}}>To update, please change the name field or click the cancel button</p>
                <form>
                    <TextField
                        name="name"
                        value={this.state.name === null ? this.props.tasks.name : this.state.name}
                        onChange={this.handleTextChange.bind(this)}
                        label="Name"
                        variant="outlined"
                        style={{ textAlign: 'center', margin: "10px" }}
                        className="updateTextField"
                    />
                    <br/>
                    <TextField
                        name="description"
                        value={this.state.description === null ? this.props.tasks.description : this.state.description}
                        onChange={this.handleTextChange.bind(this)}
                        label="description"
                        variant="outlined"
                        style={{ textAlign: 'center', margin: "10px" }}
                        className="updateTextField"
                    />
                    <br/>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.handleSubmitChange.bind(this)}
                        className="submit-btn"
                    >
                    Submit
                    </Button>
                </form>
            </div>
        )
    }
}

export default UpdateTaskForm
