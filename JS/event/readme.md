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
  