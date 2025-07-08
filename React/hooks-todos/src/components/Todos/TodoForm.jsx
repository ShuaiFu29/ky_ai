import {
  useState,
  useRef
} from 'react'

const TodoForm = ({ onAddTodo }) => {
  // 数据  props 参数数据  state 私有数据
  // 单向数据流 
  const handleSubmit = (e) => {
    e.preventDefault()
    let result = text.trim()  // dry repeat yourself
    if (!result) return
    onAddTodo(result)
    setText('')    // 数据状态和界面状态一致要敏感
    // 失去焦点
    console.log(inputRef.current)
    inputRef.current.blur()
  }
  const [text, setText] = useState('')
  const inputRef = useRef(null)
  return (
    // JSX 一定需要一个根节点
    <>
      <h1 className='header'>Todo List</h1>
      <form className='todo-input' onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          required
          placeholder='Add a todo'
        />
        <button type='submit'>Add</button>
      </form>
    </>
  )
}

export default TodoForm