import React, { Component } from 'react'
import TaskList from './TaskList';
import './TaskPage.css'
import TaskForm from './TaskForm';


const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

export class TaskPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nuevaTarea: false
        }
    }

    renderTaskLists() {
        const { tasks } = this.props;
        return TASK_STATUSES.map(status => {
            const statusTasks = tasks.filter(task => task.status === status);
            return <TaskList key={status} status={status} tasks={statusTasks} />;
        });
    }


    render() {
        return (
            <div className="tasks">
                {
                    this.state.nuevaTarea ?
                        <TaskForm></TaskForm> :
                        <button onClick={() => this.setState({ nuevaTarea: true })}>Nueva Tarea</button>
                }

                <div className="task-lists">
                    {this.renderTaskLists()}
                </div>
            </div >
        )
    }
}

export default TaskPage

