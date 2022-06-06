import { useContext } from 'react'

import Content from './UseContext/Content'
import './UseContext/index.css'

import { ThemeProvider, ThemeContext } from './UseContext/ThemeContext'

/** useContext
 * 1. Create Context
 * 2. Provider
 * 3. Consumer
 */

export default function UseContext() {

    const context = useContext(ThemeContext)
    
    return (
        <>
            <button
                onClick={context.toggleTheme}
            >Change theme</button>
            <Content/>
        </>
    )
}