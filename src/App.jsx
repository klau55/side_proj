import { useState, useEffect } from 'react'
import './App.css'
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

  return (
    <>
      <div>
        <div>ADD MORE</div>
        <div>
          {ideas.map(idea => <div key={idea.id}>{idea.content}
          <button onClick={() => removeIdea(idea.id)}>remove</button>
          </div>)}
        </div>
      </div>
      <form className="form" onSubmit={addIdea}>
        <input onChange={(event) => setNewIdea(event.target.value)} type="text" placeholder="Add your own idea" className="input" />
        <button type='submit'>SEND IT</button>
      </form>
    </>
  )
}

export default App