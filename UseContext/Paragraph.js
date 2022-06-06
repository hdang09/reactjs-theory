import { useContext } from "react"
import { ThemeContext } from './ThemeContext'
import './index.css'

export default function Paragraph() {
    const context = useContext(ThemeContext)
    
    return (
        <h1 className={context.theme}>Text</h1>
    )
}