import {
  useState  // 私有
} from 'react'
import { useTodoContext } from '../hooks/useTodoContext'
const AddTodo = () => {
  const { addTodo } = useTodoContext()
  const [text, setText] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    if (text.trim()) {
      addTodo(text.trim())
      setText('')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  )
}
export default AddTodo