import { CREATE_TASK, CHANGE_STATUS, GET_TASK } from '../actions'

export const tasks = (state = { tasks: [] }, action) => {
    console.log("REDUCER", state, action);
    switch (action.type) {
        case CREATE_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case CHANGE_STATUS:
            return {
                ...state,
                tasks: [...state.tasks.filter(e => e.id !== action.payload.id),
                {
                    ...state.tasks.filter(e => e.id === action.payload.id)[0],
                    status: action.payload.status
                }]
            }
        case GET_TASK:
            return {
                ...state, 
                tasks: action.payload
            }
        default:
            return state;
    }
}
