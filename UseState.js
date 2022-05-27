// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react'

const prices = [1000, 2000, 5000]

function UseState() {

  // const [number, setNumber] = useState(5)
  // Initial state with callback
    const [number, setNumber] = useState(prices.reduce((acc, cur) => acc + cur))



  // let handleIncrease = () => setNumber(number + 1)

  // Only increse 1 unit
    // let handleIncrease = () => {
    //   setNumber(number + 1)
    //   setNumber(number + 1)
    //   setNumber(number + 1)
    // } 
  // Increae 3 units
    let handleIncrease = () => {
      setNumber(number => number + 1)
      setNumber(number => number + 1)
      setNumber(number => number + 1)
    }

  return (
    <div style={{ paddingLeft: '20px' }} className="UseState">
      <h1>{number}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

export default UseState;

/** Hooks
 * Uses for function component
 * Create simple and readable component
 * When we use Hooks?
 *  - New project => Hooks will
 *  - Old project
 *   + New Component => Function component + Hooks
 *   + Old component => Keep it
 *  - Major logic need to use OOP => Class component
 * Can combine Fuction component and class component
 */

/** setState
 * Component will be re-rendered (call 'App' function) after calls 'setState'
 * Intial State only use for the first time
 * setState is change state with new value
 */
