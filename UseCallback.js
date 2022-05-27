import { useCallback, useState } from "react"

import UseCallbackContent from './UseCallbackContent'

// Prevent a component from re-rendering unless its props have changed.

export default function UseCallback() {
    const [number, setNubmer] = useState(60)

    const handleIncrease = useCallback(() => {
        setNubmer(number => number + 1)
    }, [])

    return (
        <>
            <h1>{number}</h1>
            <UseCallbackContent onIncrease={handleIncrease}/>
        </>
    )
}