# reducer  and  context

- useReducer 的核心
    - 响应式状态管理
    - reducer 纯函数  状态生产  状态改变定规矩
    - initialArg 初始化状态
    - init? 可选 初始化函数
    - dispatch 派发一个action
        { type: 'increment', payload: 1 }
- useContext 
  createContext 创建一个上下文
  Provider 提供上下文
  Consumer 消费上下文
  useContext 使用上下文
- useReducer(响应式状态) 和 useContext(通信) 的结合使用
  跨层级全局  -> 应用(theme/login/todos)

- 自定义hook
  组件(渲染)  + hook (状态)

- hook + useContext + useReducer
  全局应用级别响应式状态