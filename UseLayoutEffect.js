import { useLayoutEffect, useState } from "react"

/** useLayoutEffect 
 * 1. Update state in 'useState'
 * 2. Update DOM (mutated)
 * 3. Render UI
 * 4. Call cleanup if deps change
 * 5. Call useEffect callback
 */

/** useLayoutEffect
 * 1. Update state in 'useState'
 * 2. Update DOM (mutated)
 * 3. Call cleanup if deps change (sync)
 * 4. Call useLayoutEffect callback (sync)
 * 5. Render UI
 */

export default function UseLayoutEffect() {
    const [number, setNumber] = useState(1)

    useLayoutEffect(() => {
        if (number === 4) setNumber(0)
    }, [number])
    
    const handleRun = () => {
        setNumber(number + 1)
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}