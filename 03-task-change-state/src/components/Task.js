import React from 'react'
import './Task.css'
import { connect } from 'react-redux'
import { TASK_STATUSES } from '../config'
import {changeStatus} from '../actions'

const Task = props => {


    const onStatusChanged = (e) => {
        console.log("status changed", e.target.value);

        props.dispatch(changeStatus(props.task.id, e.target.value))
    }
    
    return (
        <div className="task">
            <div className="task-header">
                <div>{props.task.title}</div>
                <select style={{ float: "right" }} value={props.task.status}
                    onChange={onStatusChanged}>
                    {TASK_STATUSES.map(
                        i => <option key={i} value={i}>{i}</option>
                    )}
                </select>
            </div>
            <hr />
            <div className="task-body">{props.task.description}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(Task)
