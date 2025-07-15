import {
  useReducer,
  useState
} from 'react'
import './App.css'

// 管理好多
const initialState = {
  num: 0
}

// 管理  分部门
// reducer 纯函数 提供可靠的状态
// 状态生成器
// case 状态修改的规定
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        num: state.num + 1
      }
    case 'decrement':
      return {
        ...state,
        num: state.num - 1
      }
    case 'incrementNum':
      return {
        ...state,
        num: state.num + Number(action.payload)
      }
    default:
      return state
  }
}


function App() {
  // 初始值  initialState
  // 当前状态值  旧状态  新状态
  // 界面由当前状态来驱动
  // 修改状态的方法
  // 响应式
  // 管理 useState 有点  useReducer 都有 并更高级
  // const [count, setCount] = useState(0)
  // 大型项目
  // dispatch 派发 函数
  // 参数固定  {type:' '}  action_type
  const [num, setNum] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={() => dispatch({ type: 'incrementNum', payload: num })}>+</button>
      <p>{state.num}</p>
    </>
  )
}

export default App