import { ADD_TASK, REMOVE_TASK, SET_TODO_INPUT } from './constants'

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTask = payload => ({
    type: ADD_TASK,
    payload
})

export const removeTask = payload => ({
    type: REMOVE_TASK,
    payload
})