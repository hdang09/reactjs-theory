import { useState } from "react"
import UseEffectContent from "./UseEffectContent"

// Fake comments
const emitMessage = (id) => {

    setInterval(() => {
        const event = new CustomEvent(
            `lesson-${id}`, 
            {
                detail: `Content of lesson ${id}`
            }
        )
    
        window.dispatchEvent(event)
        
    }, 2000);

}

emitMessage(1)
emitMessage(2)
emitMessage(3)


export default function UseEffect() {

    const [show, setShow] = useState(false)

    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <UseEffectContent />}
        </div>
    )
}