import './App.css'
import {
  useEffect,
} from 'react'
function App() {

  useEffect(() => {
    // (async () => {
    //   // 前后端联调
    //   const res = await fetch('http://localhost:8080/api/hello')
    //   const data = await res.json()
    //   console.log(data)
    // })()
    // JSONP
    const script = document.createElement('script')
    script.src = 'http://localhost:8080/api/hello'
    document.body.appendChild(script)
  }, [])
  return (
    <>

    </>
  )
}

export default App
