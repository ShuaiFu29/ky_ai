# event loop
事件循环机制 JS 执行机制

- JS 单线程
  同一时刻只能做一件事情
  同步任务要尽快执行完，渲染页面(重绘重排)，响应用户的交互(优先)
  耗时性的任务？
  - setTimeout？
  - fetch/ajax
  - eventListener
- script 脚本
  一个宏任务
  宏任务：script 、setTimeout/setInterval/setImmediate、
  UI rendering/UI事件、postMessage、MessageChannel、I/O(Node.js)
  微任务：Promise、process.nextTick(Node.js)、MutationObserver
- 微任务有哪些？
  紧急的，更加优先，同步任务执行完后的一个补充
  - promise.then()
  - MutationObserver
    DOM 改变在页面渲染前  拿到DOM 有什么改变
  - queueMicrotask()
  - process.nextTick()
