# 手写React

- Dideact
    - 命名空间 namespace
    - 对象字面量
- VDOM
    UI 表达 JSX
    JSX -> 转成VDOM ？

- JSX react 优点
    JS 里编写HTML，及其简便的表达UI
    babel React.createElement
    Dideact.createElement

## createElement

- App.jsx -> babel -> Dideact.createElement(tag,props,...children)
    返回的结果  VDOM -> render 生成真正的DOM
    由Vnode 结点组成的VDOM 树，每个节点包含type，props 两个属性
    props.children 是子节点 也是一个对象
## Didact 运行的入口    
- babel 将JSX 转译为React.createElement 方法调用，
    给相应的参数，生成VDOM
    @babel/preset-react pragma 编译后的函数名
    pragma JSX 不是react 的专属，vue 中也可以用JSX

React.createElement 返回的 Element 就是一个描述“要在页面上渲染什么”的普通 JavaScript 对象（即虚拟 DOM 节点），
它包含 type、props 等属性，是 React 用来对比变化并高效更新真实 DOM 的虚拟表示。

- createTextElement 这么复杂？
    type 没有的
    children 没有的
    统一，执行render 

## 目前完成
- React is a namespace
- The createElement Function (工厂模式)
- The render Function
- Concurrent Mode 并发模式
- fibers 机制 可中断


## Concurrent Mode 并发模式
React Concurrent Mode 是一种让渲染过程可中断、可优先级排序的机制，
通过将工作拆分为小块并允许高优先级更新（如用户输入）插队，
从而避免主线程阻塞，提升应用的响应性和流畅度。
fiber 结点 工作结点
- 中断
- 继续
- fiber 结点对象有哪些属性

## render 分成两个阶段
- 渲染阶段 构建新的虚拟dom 树 diff patch
- 提交阶段 把改变应用到dom 上

## diff 算法
- 同层比较 不然时间复杂度是 O(n^3)
    - ABCDE  EABCD
    dom 开销比较大
    diff 算法除了考虑本身的时间复杂度之外，还要考虑一个因素：dom 操作的次数
    移动操作比较新增 + 删除操作更少，所以diff 算法会优先考虑移动操作
    insertBefore
- 简单diff 算法
    ABCD  DCAB
    多节点 diff 算法的目的是为了尽量的复用节点

    diff 算法我们是从一端逐个处理的，叫做简单diff 算法