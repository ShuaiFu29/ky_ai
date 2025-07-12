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


## 多线程和多进程
- CPU 轮询
- 进程
  分配资源的最小单元
  内存(地址、物理) CPU 的计算的机会
  独立的进程ID 一定的大小 开销
  程序运行
  - 主进程
    管理子进程  父子关系  并发 并行
    进程间通信
    执行JS 代码
- 线程
  干活的 执行任务的最小单元
- 进程间的通信
  两个独立进程间的通信开销很大
  父子进程就好点

- chrome浏览器是多进程架构
  - 浏览器主进程(管理其他进程的调度)
    多线程
  - 一个tab 就是一个渲染进程
    多线程
    几个tab 几个进程
    安全、一个页面crash 了，别的不受影响
  - 主线程 主角
    JS 单线程
    - 简单
    - DOM 编程模型  线程的争抢不可以  安全

  - setTimeout  专属定时器线程  
    到时间了，callback 放入宏任务队列里面
    放到event loop 中  队列中
    为什么setTimeout 不准
    event loop 机制
    宏任务  微任务  队列
  - addEventListener 没有独立的进程
    渲染线程管着DOM  不需要单独的线程  宏任务队列
  - fetch/xhr 专属的下载线程

- 渲染进程的主线程
  - 解析HTML -> DOM 树
  - 解析CSS -> CSSOM 树
  - 结合 渲染树
  - Layout 树
  - 合并图层
  - V8 引擎JS 执行
  - 独立的绘制线程
- 事件队列？
  - 定时器到点了
  - onReadyStateChange 4xx
  - 微任务队列
  - 宏任务队列
- 页面渲染

JS 和渲染是互斥的