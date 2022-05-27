import { memo } from 'react'

function UseCallbackContent({ onIncrease }) {
    console.log('Re-render')

    return (
        <div>
            <button onClick={onIncrease}>Increase</button>
        </div>
    )
}

export default memo(UseCallbackContent)