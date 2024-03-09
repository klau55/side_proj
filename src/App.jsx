import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <list>
        <a>HELLO WORLD</a>
        <li>IDEAS:</li>
        <li>bad-habits tracker</li>
        <li>“Personal gym buddy” finder</li>
        <li>good habits tracker ^_^</li>
        <button onClick={() => setCount((count) => count + 1)}>click if you dare</button>
        <p>{count}</p>
      </list>
    </>
  )
}

export default App
