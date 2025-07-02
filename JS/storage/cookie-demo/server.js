// node 后端
// node 内置核心模块 http
// JS 在命令行运行
// JS 有两种模块化方案
// import es6 更先进的模块化方案
// require node 早期模块化commonJS  old  module
// node 更受欢迎  中小项目开发
// 端口  -> 某个服务
// 3306 mysql 服务  进程(进程是分配资源的最小单位)  -> 线程是cpu调度的最小单位 执行
// domain(localhost) -> ip 地址(127.0.0.1) -> 某台设备 -> port -> 设备上的某个服务(进程)
// 1234 8080 端口占用了
// 一台设备上可以很多端口使用  有多个http 服务  多个网站
// 不要使用一些特殊的端口

const http = require('http')
const fs = require('fs')     // fileSyetem 
const path = require('path')  // 路径模块
const { error } = require('console')

const server = http.createServer((req, res) => {
  // res.end('Hello http server server.js')
  // http 基于请求响应的协议 req response
  // 路由 根据不同的请求路径返回不同的内容
  // Method + url 为了资源 定位了在服务器的资源  URL 统一资源定位符
  if (req.method == 'GET' && (req.url == '/' || req.url == '/index.html')) {
    // console.log(__dirname)
    // console.log(path.join(__dirname, 'public', 'index.html'))
    fs.readFile(
      path.join(__dirname, 'public', 'index.html'),
      // callback  异步回调
      (error, data) => {
        // 前端体验为主  后端稳定为主
        if (error) {
          res.writeHead(500)  // 5xx 服务器错误
          res.end('Server Error')
          return
        } else {
          //不只是html、css、js、jpg
          res.writeHead(200, {
            'Content-Type': 'text/html;charset=utf-8'
          })
          res.end(data)
        }
      })
  }
  // 后端路由 暴露资源
  if (req.method == 'GET' && req.url == '/style.css') {
    // 协议 http://  域名 localhost  端口 8080  路径 /style.css  查询 queryString
    fs.readFile(path.join(__dirname, 'public', 'style.css'), (error, data) => {
      if (error) {
        res.writeHead(500)
        res.end('Server Error')
        return
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/css;charset=utf-8'
        })
        res.end(data)
      }
    })
    return
  }
  if (req.method == 'GET' && req.url == '/script.js') {
    fs.readFile(path.join(__dirname, 'public', 'script.js'), (error, data) => {
      if (error) {
        res.writeHead(500)
        res.end('Server Error')
        return
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/javascript;charset=utf-8'
        })
        res.end(data)
      }
    })
    return
  }
})
server.listen(8080, () => {
  console.log('http server running at http://localhost:8080')
})