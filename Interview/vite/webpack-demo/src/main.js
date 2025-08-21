import { aMessage } from './a.js'
import Hello from './Hello.jsx'
// 引入css 文件
import './main.css'

document.getElementById('app').innerHTML = `
  <h1>Webpack</h1>
  <p>${aMessage()}</p>
`