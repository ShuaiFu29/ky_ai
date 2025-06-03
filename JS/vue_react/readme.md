# JS(原生) -> vue + react


## 语言化标签
- 图标，表格 给老板看
  table 
    thead
      tr
        th
    tbody
      tr
        td

## DOM 编程
- 操作DOM 节点，将界面动态更新

## 样式  用户体验
- 不用去写细节和重复代码  focus 于业务(熟)
- 引入第三方库 bootstrap  PC CSS框架 业务类
- .container 容器 固定宽度
- table

## 如何将JS 代码交给框架去做，focus于**业务**
- jquery 退出历史舞台
- vue
  聚焦于业务
  friends 数据显示到tbody 挂载点上 远离API 循环输出tr
- react


## 现代前端开发框架
- 离开原生的JS 的刀耕火种
- 聚焦于业务
  - App 的概念
    切图崽 html + css + 简单的js(DOM+event)
    App 应用开发工程师
    Vue.createApp(App).mount('#app')
    #app 是 这里面支持Vue app 接管 不用低级的DOM API
    - 循环输出数据
      - vue App 中提供了 data(){
        friends
      }
      - tr v-for 配合循环输出的业务

## react 来自于Facebook 适合大型应用
- 创建react 应用
