
function logger(reducer) {
    // reducer(state, action)
    return (state, action) => {
        console.group(action.type)

        console.log('Prev state: ', state)
        console.log('Action: ', action)
        const newState = reducer(state, action)
        console.log('New State: ', newState)

        console.groupEnd()
        return newState
    }
}

export default logger