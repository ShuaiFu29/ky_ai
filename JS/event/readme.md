# react 事件机制
- JS 事件机制
  - 异步
  - 监听一个事件
    - addEventListener()
      DOM2 事件
    - DOM 0
    <a onClick='doSomething()'></a>
    - DOM1? DOM版本，没有做事件升级
  - addEventListener(type,listener,useCapture)
    - 回调函数 callback 是异步处理的总称
    - async await
    - 监听器
- useCapture false 默认值
  页面是浏览器渲染引擎按像素点画出来的 png
  - 事件捕获
    从最外层的window开始，逐级向下，直到目标元素
  event.target
    捕获阶段结束，拿到了event.target
  - 事件冒泡
    - 从目标元素开始，逐级向上，直到window 
    为什么还要冒泡？
    点击子元素，父元素也同时被点击
    可以决定子元素先执行还是父元素先执行
    事件让它他在冒泡阶段执行
  - 在哪个阶段执行？
  
## 事件委托优势 Event Delegation
- 性能优化
  - 将事件委托给最外层函数
  React 大型项目开发
  给我们的事件节点event.target 添加一个唯一属性
- 动态节点的事件
  滚动到底部，一次新增一堆新元素
  事件委托可以有效解决
- 同一元素同一事件  注册多次
  - DOM 节点
  - Event type 
  - 监听器(回调函数)  event loop
    event 对象
  - useCapture
  - event.preventDefault()   // 阻止默认行为
    默认行为 form submit a 标签 
  - event.stopPropagation()  // 阻止冒泡

- 用户交互的便利体验问题
  - toggle按钮
  - 点击页面任何空白地方可以关闭  方便  stopPropagation
  - 显示区域可以交互  stopPropagation

- SynctheticEvent 合成事件
  - 委托 #root
    - 性能优化框架帮我们做
  - 事件池 Event pooling
    大型密集交互的应用
  - 在最近的版本中又可以安全使用了