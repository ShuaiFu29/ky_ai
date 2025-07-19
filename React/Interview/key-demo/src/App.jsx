import {
  useState,
  useEffect
} from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      title: '标题1'
    },
    {

      title: '标题2'
    },
    {

      title: '标题3'
    }
  ])
  useEffect(() => {
    setTimeout(() => {
      setTodos(pre => [{ title: '标题4' }, ...pre])
    }, 5000)
  }, [])
  return (
    <ul>
      {
        todos.map((todo, index) => (
          <li >
            {index}
            {todo.title}
          </li>
        ))
      }
    </ul>
  )
}

export default App
