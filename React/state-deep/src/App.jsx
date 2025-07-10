import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(count)
  const handleClick = () => {
    // 异步  不是同步
    // react 性能优化   合并多次更新
    // 重绘重排
    // 数据绑定 界面更新
    // JS 引擎V8 渲染引擎 Blink
    // 界面更新合并成一次的
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    // 保证每个更新都基于上一个最新的更新
    setCount(pre => pre + 1)
    setCount(pre => pre + 1)
    setCount(pre => pre + 1)
  }
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>当前count值为：{count}</p>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={handleClick}>+3</button>
    </>
  )
}

export default App
