import { useState } from "react"

function App() {
  // react 内置的hook (钩子)函数 快速解决一些问题 响应式的数据状态
  // useRef DOM 等对象的绑定
  // base64 google 推出的编码方案
  const [content, setContent] = useState('')
  const [imgBase64Date, setImgBase64Date] = useState('')
  const [isValid, setIsValid] = useState(false)

  const updateBase64Date = (e) => {
    // 拿到图片 e html5 JS 和操作系统本地文件交互
    const file = e.target.files[0]
    // console.log(file)
    if (!file) return
    // html5 读的方式 读取文件
    const reader = new FileReader()
    reader.readAsDataURL(file)
    // 异步操作
    reader.onload = () => {
      // console.log(reader.result)
      setImgBase64Date(reader.result)
    }
    setIsValid(true)
  }
  const update = () => {

  }

  return (
    <div className="container">
      <div>
        <label htmlFor="fileInput">文件</label>
        <input
          type="file"
          id="fileInput"
          className="input"
          accept=".jpeg,.jpg,.png,.gif"
          onChange={updateBase64Date}
        />
        <button onClick={update} disabled={!isValid}>提交</button>
      </div>
      <div className="output">
        <div className="preview">
          {
            imgBase64Date && <img src={imgBase64Date} alt="img" />
          }
        </div>
        <div>
          {content}
        </div>
      </div>
    </div>
  )
}

export default App
