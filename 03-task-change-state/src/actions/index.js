import {v1 as uuid} from 'uuid'

export const CREATE_TASK = "create-task";
export const CHANGE_STATUS ="change-status"


export const createTask = (title, description) => {
    return {
        type: CREATE_TASK, 
        payload: {
            title: title,
            description: description,
            status: "Unstarted",
            id: uuid()
        }
    }
}

export const changeStatus = (id, status) => {
    return {
        type: CHANGE_STATUS, 
        payload: {
            id, 
            status
        }
    }
}