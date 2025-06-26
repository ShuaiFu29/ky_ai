# 回流重绘

- 布局的难点 列式布局和理解BFC/FFC
  - HTML 根元素 最外层的第一个BFC 元素
    Block Formatting Context 块级从上到下 行内从左到右 BFC 格式化上下文
    有了文档流
  - float overflow:hidden  flex
  - 有没有什么标签 可以做列式布局 table
    tr td
  - 为什么不用？
    - 触发太多回流和重绘
    - 语义不明确 table 数据表
      tr row td column
    - 不够灵活
    - 性能问题
      由于表格必须等待所有内容加载完毕后才能显示出来，
      因此可能会导致页面加载速度变慢，用户体验不佳。

## 回流和重绘
- 回流/重排 reflow
  当RenderTree 中部分或全部元素的尺寸、结构、或某些属性的读取发生改变时，
  浏览器重新渲染部分或全部文档的过程叫回流.
  table 不适合 table 中布局的改变，会影响整个table 的回流重排 火烧赤壁
  display:none  仍然存在DOM树中 但是不占据空间只是不渲染 不参与回流重绘 性能优化的一种方案
  - 触发回流(重排 reflow)的方式
    1. 页面首次渲染 严格意义不是  0 -> 1 有   最耗时  网页每慢0.1s  少1000万  爽
    2. 浏览器窗口的大小改变 
    3. 元素尺寸或位置发生改变 (transition transform/opacity 新图层除外)
    4. 元素内容的变化
      appendChild removeChild
    5. display:none block
    6. 字体大小的变化
    7. 激活css 伪类  :hover color ？ 浏览器需要重新计算元素的样式和布局
    8. 查询某些属性或调用某些方法时
        - getBoundingClientRect()  获取元素的布局信息 触发回流
        ret{
          top:100px;
          left:100px;
          width:100px;
          height:100px;
        }
- 重绘 repaint
  当元素的样式的改变并不影响它在文档流中的位置
  color background-color visibility hidden show

## 页面是怎么渲染的？
- 输入URL 
- 下载HTML
  - 下载字节流 Content-Type:text/html
  - html utf-8 编码
  - 解析html(Parser) 开关标签属性... 
  - 节点对象
  - 构建DOM 树
- link 下载CSS
  - 下载字节流 Content-Type:text/css
  - 编码 utf-8 得到css 文本
  - tokenizer 词法分析
  - css rule 节点
  - cssom 树
- 合并DOM 树和CSSOM (CSS Object Model) 树，生成渲染树(render tree)
- Layout 树
  布局，盒模型，大小 确定元素
- 图层
  - z-index 
  - position:fixed  弹窗
  - transition + transform /opacity animation
  - translate(50%,50%)  3D 页面  GPU 加速
  1个图层 主要文档流图层 = DOM 树 + CSSOM -> RenderTree <-> LayoutTree 
  2个图层 = DOM 树 + CSSOM -> RenderTree -> LayoutTree
  - 图层的合并
  - 浏览器的渲染引擎 绘制平面 像素点绘制