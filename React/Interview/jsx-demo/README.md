# JSX 考点
- 何为JSX
    JS in XML(HTML 是XML 的一种形式)
    react 推崇的JavaScript 语法扩展 运行再JavaScript 代码中嵌入HTML 结构(function return JSX 组件)
    常用于React 组件的定义，使得UI 结构更直观易读
    React 的一大优点特性
- JSX 可以直接运行吗？
    不可以 
- .sty -> stylus 编译 -> .css
<ul>
  <li key={todo.id}>{todo.title}</li>
</ul>
- JSX -> React.createElement(tag,props,children) -> document.createElement(tag,props,children)