import './App.css'
import { useCountStore } from './store/count'
import Counter from './components/Counter'
import { useTodosStore } from './store/todos'
import { useState } from 'react'
function App() {
  const { count } = useCountStore()
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodosStore()
  const [inputValue, setInputValue] = useState('')
  return (
    <>
      <h1>Zustand 计数器 count:{count}</h1>
      <Counter />
      <hr />
      <h2>TodoList</h2>
      <input type="text" placeholder="添加todo" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={() => addTodo(inputValue)}>添加</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>删除</button>
          </li>
        ))}

      </ul>
    </>
  )
}

export default App