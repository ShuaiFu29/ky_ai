# uploader 大厂必考

- 源码学习是核心
  - 高质量的代码和技巧
  - 思维方式
- 技能点
  - 语义化标签
  - BEM 命名规范
  - 弹性布局
  - sytylus 变量 模块化
  - 伪元素
- weui-uploader 源码
  - weui-uploader 外面严谨的套上了 .weui-cells
  - .weui-cells 移动端收集用户数据或操作表单表格
    - .weui-cell 每个表单元素
      - .weui-cell__bd  内容
- -webkit-overflow-scrolling:touch;
  滚动更敏感，感知touch 操作
  -webkit  处于实验阶段
   chrome 浏览器内容的代号 在chrome 浏览器使用起来
   移动端没有微软 苹果，安卓都是webkit 内核
- 变量组成了weui 主题风格
- stylus & 引用上一层变量 伪类，伪状态
- float 布局
  - 早于flex 布局方案
  - 离开文档流
  - float:left\right  左浮 右浮 两列式布局
  - 一直float:left  多列
  - 一行不够会自动换行