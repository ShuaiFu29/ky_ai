# hooks todos 

- 安排个css 亮点
  - stylus 
      css 超集
  - 拥有vite 脚手架
    stylus 预编译 安装stylus vite 直接编译
    vite 来自vue 社区
  - react 组件设计
    - 开发任务单元
    - 设计组件
      界面功能 状态 响应式
      - 新建todos  表单
      - 修改  列表
      - 删除
    - 按功能划分  粒度越小  diff 代价更小
      - form
      - list 列表组件
        - Item 组件 维护和**性能**
- 字体
  - 设置多个，设备的支持(本地包含)
  - 对苹果设备 -apple-system  前端负责用户体验 字体也是体验
- rem
  - 相对单位
  - 移动端的重要单位  px 不要用了 绝对单位
    移动端 宽高不定的 rem(相对于 html font-size)   vw/vh(viewport)  em (相对于自身的font-size 等比例)
    使用相对单位，可以在所有设备上适配

- props
  - 传递状态
  - 自定义事件
  - 直接解构  const {} = props

- 数据绑定
  - 变量  修改值
  - 数据状态
    - Data binding **数据**绑定  jsx 就是静态的
    {} 数据绑定
    - 数据和界面状态的统一
      - 界面由数据驱动
      - 数据和界面状态的一致性
    - 响应式的
  - Vue: <input v-model='text' />   双向绑定
  - React: <input value={text} onChange={e => setText(e.target.value)} />  单向绑定

- vue 和react 的区别
  - vue 好入门，API 文档好用
  - react 倾向于原生JS 缺点入门难
    - hooks

- 本地存储
  - localStorage  html5 
    key:value  存储
    localStorage.setItem(key,value)
    localStorage.getItem(key)
    localStorage.removeItem(key)
    localStorage.clear()
  - BOM  Browser Object Model
  - DOM  Document Object Model
- 本地存储
  - localStorage 和 cookie 有什么不同？
  - http 无状态  head cookie 带上
  - cookie 过大 影响http 传输性能  4kb
  - cookie 前端、后端都可以设置
    过期时间  domain  path  secure  httpOnly
  - localStorage 只在浏览器设置，不参与http 请求  5MB
  - IndexedDB  数据库  GB

## 自定义hooks
  - 自己定义的
  - use开头
  - 某一项功能
    简单函数的封装
    响应式的状态
    effect
    todos
- 自定义hooks
  - 现代React 架构一部分
  - hooks 目录
    自定义hooks
    框架common 部分
    业务定制ahooks 
  - use 开头
    state，effect 逻辑封装复用
  - return
    todos  toggle addTodos deleteTodos
    函数式编码思想的体现
  - 组件更好的聚焦于模块渲染
  - 全面hooks 函数式编程

- 两个遗憾
  - ../../ 
    vite alias 配置
  - toggle delete 跨越组件层级有点多  useContext