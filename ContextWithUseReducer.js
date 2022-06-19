import { useStore, actions } from './store'

function ContextWithUseReducer() {

    const [state, dispatch] = useStore()
    const { todos, todoInput } = state

    console.log('Todos: ', todos)

    return (
        <>
            <label>Input task</label>
            <input 
                placeholder="Input your task..."
                value={todoInput}
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button onClick={() => dispatch(actions.addTask(todoInput))}>Add Task</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => dispatch(actions.removeTask(index))}>x</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ContextWithUseReducer