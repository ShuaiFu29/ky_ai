import './App.css'
import PictureCard from './components/pictureCard'
function App() {
  // JSX 语言  React 的优势  方便写HTML 模板
  return (
    <div className='container'>
      {/* 自定义组件 子组件 */}
      {/* 组合 html，css，js 沙子一样 组合起来 图片上传功能 */}
      {/* 模块化了 复用  页面由DOM 树 -> 组件树 */}
      <PictureCard />
    </div>
  )
}

export default App
