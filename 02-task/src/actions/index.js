import {v1 as uuid} from 'uuid'

export const CREATE_TASK = "CREATE_TASK";


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