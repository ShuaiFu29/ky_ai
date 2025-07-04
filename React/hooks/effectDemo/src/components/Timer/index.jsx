import {
  useState,
  useEffect
} from 'react'
const Timer = () => {
  const [time, setTime] = useState(0)
  console.log('组件函数执行')
  console.log('JSX编译')
  useEffect(() => {
    console.log('组件渲染完了111111')
    const timer = setInterval(() => {
      setTime(prev => prev + 1)
    }, 1000)
    return () => {
      console.log('组件卸载了')
      clearInterval(timer)
    }

  }, [])
  return (
    <div>已经运行了{time}秒</div>
  )
}
export default Timer