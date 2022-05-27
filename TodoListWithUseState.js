import { useState } from "react"


export default function TodoListWithUseState() {

    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

    const handleRemove = (taskIndex) => {
        // tasks.splice(taskIndex, 1)
        // localStorage.setItem('tasks', JSON.stringify(tasks))
        // setTasks(tasks)

        const newTasks = tasks.filter((task, index) => index !== taskIndex)
        localStorage.setItem('tasks', JSON.stringify(newTasks))
        setTasks(newTasks)
    }

    const handleSubmit = () => {
        setTasks(prev => {
            let taskList = [...prev, task]
            localStorage.setItem('tasks', JSON.stringify(taskList))
            return taskList
        })
        setTask('')
    }

    return (
        <div>
            <input
                value={task}
                onChange={e => setTask(e.target.value)}
            />

            <button onClick={handleSubmit}>Add Task</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{ display: 'flex' }}>
                        <span>{task}</span>
                        <button
                            style={{ marginLeft: 'auto' }}
                            onClick={() => handleRemove(index)}
                            // onClick={() => setRemovedItem(index)}
                        >X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
    
}