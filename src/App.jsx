import { useState, useEffect } from 'react'
import './App.css'
import { useMouse } from "@uidotdev/usehooks";
//import Greeting from './Greeting/Greeting'
import ideaService from './services/ideas'
import axios from 'axios'

function App() {
  const [newIdea, setNewIdea] = useState("")
  const [ideas, setIdeas] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/ideas')
      .then(response => {
        setIdeas(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const addIdea = (event) => {
    event.preventDefault()
    const ideaObject = {
      id: String(ideas.length + 1),
      content: newIdea
    }
    ideaService.create(ideaObject)
    setIdeas(ideas.concat(ideaObject))
    setNewIdea('')
  }
  const removeIdea = (id) => {
    ideaService.remove(id)
    setIdeas(ideas.filter(idea => idea.id !== id))
  }

  const [mouse, ref] = useMouse();
  return (
    <div className='grid-container'>
        <div
          className="blue-cirle"
          ref={ref}
          style={{left: mouse.x, top: mouse.y}}
        >
        </div>
        <div className="grid-item">
          <h1 className="text">Hello, World!</h1>
        </div>
        <div className="grid-item">
          <div className="shimmering-title">ADD MORE</div>
          <div>
            {ideas.map(idea => <div key={idea.id}>{idea.content}
            <button onClick={() => removeIdea(idea.id)}>remove</button>
            </div>)}
          </div>
        <form className="form" onSubmit={addIdea}>
          <input onChange={(event) => setNewIdea(event.target.value)} type="text" placeholder="Add your own idea" className="input" />
          <button className="button" type='submit'>SEND IT</button>
        </form>
        </div>
    </div>
  )
}

export default App