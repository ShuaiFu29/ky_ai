import './App.css'
import AnotherButton from './components/AnotherButton'
import Button from './components/Button'
// import 不止会加载文件 还会执行文件中的代码
// 路由懒加载

function App() {

  return (
    <>
      <Button />
      <AnotherButton />

    </>
  )
}

export default App
