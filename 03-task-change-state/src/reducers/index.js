import { CREATE_TASK, CHANGE_STATUS } from '../actions'

const mockTasks = [
    {
        id: 1,
        title: 'Learn Redux',
        description: 'The store, actions, and reducers, oh my!',
        status: 'In Progress',
    },
    {
        id: 2,
        title: 'Peace on Earth',
        description: 'No big deal.',
        status: 'In Progress',
    },
];


export const tasks = (state = { tasks: mockTasks }, action) => {
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
        default:
            return state;
    }
}
