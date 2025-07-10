import {
  useState,
  useEffect
} from 'react'

export const useTodos = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  )
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  const addTodo = (text) => {
    // setTodos
    // 数据状态是对象的时候
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        text: text,
        isCompleted: false
      }
    ])
  }
  const onToggle = (id) => {
    // 响应式？ 返回一个全新的todos
    // state 是对象或数组的时候
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
  }
  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return {
    todos,
    addTodo,
    onToggle,
    onDelete
  }
}