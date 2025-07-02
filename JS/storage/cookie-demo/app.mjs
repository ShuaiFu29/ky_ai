// es6 模块化
// mjs 后缀使用es6 模块化
// 模块化是一种语言的能力
// node 默认不支持es6 模块化
// Cannot use import statement outside a module
// node 最新版本支持了es6 模块化
// node 准备跟require commonJS say goodbye
// es6 module 更先进  mjs
import http from 'http'

const server = http.createServer((req, res) => {
  res.end('Hello http server app.mjs')
})
server.listen(1234, () => {
  console.log('http server running at http://localhost:1234')
})