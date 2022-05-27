import { useReducer } from "react"

/** useState
 * 1. Initial state
 * 2. Actions: Increase (state + 1), decrease (state - 1) 
 */

/** useReducer
 * 1. Initial state: 0 
 * 2. Actions: Increase (state + 1), decrease (state - 1)
 * 3. Reducer
 * 4. Dispatch
 */

// 1. Initial state
const initState = 0

// 2. Actions: Increase (state + 1), decrease (state - 1)
const INC_ACTION = 'increase'
const DEC_ACTION = 'decrease'
const MUL_ACTION = 'multiply'

// 3. Reducer
const reducer = (state, action) => {
    switch (action) {
        case INC_ACTION:
            return state + 1
        case DEC_ACTION:
            return state - 1
        case MUL_ACTION:
            return state * state    
        default:
            return new Error("Invalid action")
    }
}

export default function UseReducer() {

    const [number, dispatcher] = useReducer(reducer, initState)

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => dispatcher(INC_ACTION)}>Increse</button>
            <button onClick={() => dispatcher(DEC_ACTION)}>Decrease</button>
            <button onClick={() => dispatcher(MUL_ACTION)}>Mutiply</button>
        </>
    )
}