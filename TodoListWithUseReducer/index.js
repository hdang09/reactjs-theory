import { useReducer, useRef } from "react"
import reducer, { initState } from './reducer'
import { setTask, addTask, removeTask } from './actions.js'
import logger from './logger'

export default function TodoListWithUseReducer() {

    const [state, dispatch] = useReducer(logger(reducer), initState)
    const {task, tasks} = state

    const inputRef = useRef()

    const handleSubmit = () => {
        dispatch(addTask())
        dispatch(setTask(''))
        inputRef.current.focus()
    }

    return (
        <>
            <h1>TODO LIST</h1>
            <input
                ref={inputRef}
                value={task}
                placeholder="Input a task..."
                onChange={e => dispatch(setTask(e.target.value))}
            ></input>
            <button 
                onClick={handleSubmit}
            >
                Add
            </button>
            <ul>
                {tasks.map((task, index) =>(
                    <li key={index}>
                        <span>{task}</span>
                        <button
                            onClick={() => dispatch(removeTask(index))}
                            style={{ marginLeft : 20 }}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}