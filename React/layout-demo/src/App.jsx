import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef
} from 'react'
import './App.css'

// 弹窗组件
function Modal() {
  const ref = useRef()
  useLayoutEffect(() => {
    const height = ref.current.offsetHeight
    ref.current.style.marginTop = `${(window.innerHeight - height) / 2}px`
  }, [])
  return <div ref={ref} style={{ position: 'absolute', width: '200px' }}>我是弹窗</div>
}
function App() {
  return (
    <>
      <Modal />
    </>
  )
}

export default App
