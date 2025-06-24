# 手写call

- 手动指定函数内部的this
- 传参 一个个 apply []
- 当第一个参数是null\undefined this 指向window
  严格模式报错
- 应用场景的区别
  - call apply 立即执行的，区别是参数的传递方式，可以互换使用
  - bind 延迟执行

## 手写call
- call 是属于所有函数的原型上的方法  Function 原型链上的方法
  greeting.call()

## 包含的技能点
- 原型 Function
- 函数参数的理解
  context，rest 运算符
- context 为空，null，undefined -> window
- 在context 上挂载方法，轻松实现函数内部的this 指向context
  JS 的动态性
  es6 symbol 唯一值，不会有覆盖原context的属性
  delete context 上的方法
- return 返回值