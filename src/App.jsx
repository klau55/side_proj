import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <list>
        <li>HELLO</li>
        <li>WORLD</li>
        <li>WELCOME</li>
        <li>TO</li>
        <li>HELL</li>
        <button onClick={() => setCount((count) => count + 1)}>click if you dare</button>
        <p>{count}</p>
      </list>
    </>
  )
}

export default App
