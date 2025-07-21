import './App.css'
import {
  useState,
  useEffect
} from 'react'

import {
  // getTodos,
  getRepos
} from '@/api'


function App() {
  // const [todos, setTodos] = useState([])
  const [repos, setRepos] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      // const todos = await getTodos()
      // setTodos(todos.data)
      // console.log(todos.data.data)
      // setTodos(todos.data.data)
      const repos = await getRepos()
      console.log(repos.data)
      setRepos(repos.data)
    }
    fetchData()
  }, [])

  return (
    <>
      {/* {todos.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      ))} */}
      <hr />
      {
        repos.map(repo => (
          <div key={repo.id}>
            <h3>{repo.title}</h3>
            <p>{repo.description}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
