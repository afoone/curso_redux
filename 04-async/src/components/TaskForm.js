import React, { Component } from 'react'
import './TaskForm.css'
import { connect } from 'react-redux'
import { createTask } from '../actions'

export class TaskForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }

    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.dispatch(createTask(this.state.title, this.state.description))
    }

    render() {
        return (
            <div className="task-form">
                <form>
                    <label>
                        Title:
                    </label>
                    <input onChange={this.onInputChange} name="title"></input>
                    <label>
                        Value:
                    </label>
                    <input onChange={this.onInputChange} name="description"></input>
                    <button onClick={this.onSubmit}>Enviar</button>
                </form>
            </div>
        )
    }



}

const mapStateToProps = function (state) {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TaskForm)
