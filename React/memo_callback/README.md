# 性能优化hook

- 父子组件渲染顺序
  - 执行的时候先外到内   组件树
  - 完成渲染   完成组件的挂载 先内后外
- Button 组件该不该重新渲染？
    - 父组件局部，count 改变和Button 组件没有关系
        Button  JSX
    - 性能优化
        响应式和性能   非常好
        切分组件   热更新
        组件之间独立
        子组件  React.memo
        createContext  useContext 所有的状态全部都给一共Context  好吗？
        不好  性能  所有状态都是通过一共reducer  生成

- 组件划分的粒度
    - 组件拆分  单向数据流
    - 就负责渲染的子组件
    - 复用  好管理之外  提升性能
    - 状态更新后组件要重新运行
    - useCallback  + React.memo