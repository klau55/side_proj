import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <list class ='list'>
      <div class="content-container">
        <div class="shimmering-title">ADD MORE</div>
        <div class="idea-list">
          <div class="idea-item">
              <span class="bullet"></span>Bad-Habits Tracker
          </div>
          <div class="idea-item">
              <span class="bullet"></span>"Personal Gym Buddy" Finder
          </div>
          <div class="idea-item">
              <span class="bullet"></span>Good Habits Tracker ^_^
          </div>
        </div>
      </div>
      <button class="button" onClick={() => setCount((count) => count + 1)}>click if you dare</button>
      <p>{count}</p>
      </list>
    </>
  )
}

export default App
