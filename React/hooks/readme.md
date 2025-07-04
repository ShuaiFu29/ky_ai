# react hooks 编程
- useState
  - 非常好用函数 函数式编程
  - 函数是一等对象(JS)
    函数还是类(JS 原型式面向对象)
    函数也是组件 return JSX
  - 以use 开头，函数式编程
- useEffect
  - 副作用 可以直接或间接的影响其他函数
- 生命周期 life-cycle 函数
  - mounted 挂载后  渲染完成
  - updated 更新后  [] 依赖项
  - 卸载后的副作用？ unmounted 
    - 定时器等会造成内存泄漏的，要回收，取消定时器
    - 请求数据  卸载时，响应式数据和DOM 不在了 取消请求

- 组件应该在什么时候去请求接口呢？
  - 组件的第一时间渲染是最重要的
  - useEffect 去请求接口
  - 不会和渲染去争取
  - 依赖项为[]
    组件状态发生状态不需要再次请求
- 为什么useEffect 函数不可以直接用async
  - 再声明一个函数
  - 执行
  - clean-up 