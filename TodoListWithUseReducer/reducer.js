import { ADD_TASK, SET_TASK, REMOVE_TASK } from './constants'

export const initState = {
    task: '',
    tasks: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    state.task
                ]
            }
        case SET_TASK:
            return {
                ...state,
                task: action.payload
            }
        case REMOVE_TASK:
            // let newTasks = state.tasks.filter((task, taskIndex) => taskIndex !== action.payload)
            let newTasks = [...state.tasks]
            newTasks.splice(action.payload, 1)
            
            return {
                ...state,
                tasks: newTasks
            }
        default:
            throw new Error(`Invalid action ${action}`)
    }


}

export default reducer