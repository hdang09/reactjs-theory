import { ADD_TASK, SET_TASK, REMOVE_TASK } from './constants'

export const setTask = payload => {
    return {
        type: SET_TASK,
        payload
    }
}

export const addTask = payload => {
    return {
        type: ADD_TASK,
        payload
    }    
}

export const removeTask = payload => {
    return {
        type: REMOVE_TASK,
        payload
    }    
}