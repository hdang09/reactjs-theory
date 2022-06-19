import { SET_TODO_INPUT, ADD_TASK, REMOVE_TASK } from './constants'

const initState = {
    todos: [],
    todoInput: ''
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload,
            }
        case ADD_TASK: 
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        case REMOVE_TASK:
            const newTodos = state.todos.filter((todo, stateIndex) => stateIndex !== action.payload)
            return {
                ...state,
                todos: newTodos
                // state.todos.filter(stateIndex !== action.payload)
            }
        default:
            throw new Error('Invalid action')
    }
}

export { initState }
export default reducer