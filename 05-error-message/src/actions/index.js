import axios from 'axios'
import {BASE_API_URL} from '../config'


export const CREATE_TASK = "create-task";
export const CHANGE_STATUS ="change-status"
export const GET_TASK ="get-tasks"
export const SET_MESSAGE = "set-message"



export const setMessage = message => {
    return {
        type: SET_MESSAGE,
        payload: message
    }
}

const createTaskSucceed = payload => {
    return {
        type: CREATE_TASK, 
        payload
    }
}

export const createTask =  (title, description) => {
    return dispatch => {
        axios.post(`${BASE_API_URL}/tasks/`, {
            title,
            description,
            status: "Unstarted"
        }).then(
            res => dispatch(createTaskSucceed(res.data))
        ).catch(
            err => dispatch(setMessage("Error creando tareas"))
        )
    }
}

const changeStatusSuceed = (task) => {
    return {
        type: CHANGE_STATUS, 
        payload: task
    }
}

export const changeStatus = (task, status) => {
    return dispatch => {
        axios.put(`${BASE_API_URL}/tasks/${task.id}/`, {
            ...task,
            status
        }).then(
            res => dispatch(changeStatusSuceed(res.data))
        ).catch(
            err => dispatch(setMessage("Error cambiando el estado de la tarea"))
        )
    }
}


const getTasksSuceed = (payload) => {
    console.log(payload)
    return{
        type: GET_TASK,
        payload
    }
}

export const getTasks = () => {
    return dispatch => {
        axios.get(`${BASE_API_URL}/tasks`).then(
            res => dispatch(getTasksSuceed(res.data))
        ).catch(
            () => dispatch(setMessage("Error recuperando las tareas del servidor"))
            
        )
    }
}