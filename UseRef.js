import { useEffect, useRef, useState } from "react"

// ref = useRef(initialValue)
// useRef return an object with property is current

export default function UseRef() {
    const [number, setNumber] = useState(60)
    
    // Handle stop countdown
    let timerId = useRef()
    const handleStart = () => {
        timerId.current = setInterval(() => {
            setNumber(number => number - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current)     
    }



    // See previous and current number
    const prevNum = useRef()
    useEffect(() => {
        prevNum.current = number
    }, [number])
    console.log(`Curr: ${number}, Prev: ${prevNum.current}`)



    // Get h1 element
    const h1Ref = useRef()
    useEffect(() => {
        console.log(h1Ref.current)

        const rect = h1Ref.current.getBoundingClientRect()
        console.log(rect)
    })

    return (
        <div>
            <h1 ref={h1Ref}>{number}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}