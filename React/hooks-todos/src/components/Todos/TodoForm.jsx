import {
  useState   //私有状态
} from 'react'

const TodoForm = () => {
  const [text, setText] = useState('')
  return (
    // JSX 一定需要一个根节点
    <>
      <h1 className='header'>Todo List</h1>
      <form>

      </form>
    </>
  )
}
export default TodoForm