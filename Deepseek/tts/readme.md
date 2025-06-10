# tts 智能语言

## 智能前端 AI 用户体验
- WebLLM
  AIGC API remote call
- tts 语言
  网易云音乐
- 用户体验
  音乐不要自动播放，社死

## 如果不能做DOM 编程，react 不能怎么播放音乐
- 原生的JS DOM API 低效 document.querySelector 不用
- audio 播放？

## 路径
- 相对路径
  ./ 同一级别目录
  ../ 上一级目录
  ./demo/ 走进demo目录的
- 绝对路径
  物理路径   C:/
  网站根路径  /  index.html  (首页)
  - /sounds/snare.wav
- http://localhost:5173/
  - npm run dev
  - 本地服务器 http:127.0.0.1:5137
  端口背后对应的是不同的服务
  - index.html 作为首页
  - public 静态资源
    约定所有的资源可以直接访问

## react 事件机制
- 不可以用addEventListener DOM Event 事件
- onClick react 事件 和html 原生支持的事件有点像

## 小红书的event 事件机制 JavaScript 高级程序设计 1000+
- 多种事件机制
  - DOM0 事件
    onClick html 属性  缺点是耦合了  不推荐
  - DOM1 事件
  - DOM2 事件
    addEventListener html 和JS 事件分离
  - react
    采用了DOM0 的方式 有利于组件html 的表达
    vue @click react 由于vue
    API 层面上看过去是这样的  其实底层还有天地

## useRef
- 可以帮助我们在react 中获取DOM 对象
  - useRef(null) 空对象
  - current 属性 null
  - jsx ref={ref}
  - ref.current 引用的DOM 对象