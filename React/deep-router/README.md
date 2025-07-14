# deep router

- router
- 401  404
- 301/302 重定向
- 性能优化

- SPA 带来了优质的用户体验
  - 快
  - 不会白屏，不依赖于http 去服务器端请求页面
- 前端首先加载路由  SPA 应用
  React
  React-Router
  Redux
- 导航 封装
- 路由懒加载
  lazyload
  - / home
  - /about  About
  只加载当前需要的
  其他的不加载
  首页
- es6 module 引入模块并且会执行  import 是静态引入的
- 懒加载的流程
  - import es6 加载并执行太多的非必要组件
    影响首页的加载数据，特别是页面多的时候
  - 引入lazy Suspense
    lazy 高阶组件(返回值是组件)
  - 使用 ()=>import('./pages/home')  动态加载
  - <Route /> 匹配到才会去动态加载相应的组件
  - Suspense 在还未加载前 fallback 