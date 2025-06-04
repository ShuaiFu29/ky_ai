# react 业务
friends 数据
App 
挂载点
页面的显示
- 原生JS
  DOM 编程
  底层API 不够高效
  聚焦于业务(html,css + 一点JS) -> 前端开发工程师 (微博，美团) JS 框架(vue/react)
  -> node 全栈开发(node +数据库) -> react native Android + IOS 
  -> AIGC AI 应用 -> 全干工程师
  web 应用(www.baidu.com) react native 移动应用(Android IOS)
  Node(server) AI 统领一切 JS AI全干工程师

## **项目**的创建
- npm 是什么？ node package manager
  node 包管理器 安装react package App 开发能力
- npm init vite
  按vite 模板初始化项目 init 
  vite vue/react 项目模板和**工程**化
- 选择一些配置
  - react
  - JS
  项目模板，基于它开发
- cd 项目名
- npm install 安装依赖
  node_modules 包所在
- npm run dev 启动项目
  5173 端口启动应用

# 5 W
- what Web App
- how npm init vite 初始化并得到vite的项目模板
- 安装依赖
- 启动应用 http 5173 react 技术栈 Web App
远离JS API 编程，面向于业务 

## 响应式业务
### TODOS 任务列表
- 数据['脱单','学习','健身']
  数据在页面上渲染 react 提供点啥 支持这个业务

## react 初体验
- react 组件是完成开发任务的最小单元
- 组件组合html，css，js
- 组件就是一个函数
- 返回html 
- 函数体里面 return 之前可以申明数据和业务逻辑
- {} js 表达式 不用写DOM API

## 响应式数据
- 数据会发生改变
- [todos,setTodos]=useState (初始值) 使用一个数据状态，返回一个数组
  数组第一项是数据项
  数组第二项是修改数据项的方法