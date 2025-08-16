# position


教科书的表达


- 五种属性值  准确，简洁
    - static  默认值，不定位  回到文档流
    - relative(相对定位)  相对元素自身原来的位置偏移，不脱离文档流 

    - absolute(绝对定位)  相对最近的非static 租先定位
        如果没有，那么相对body 定位
    - fixed 相对于视觉媒体的视口
    - sticky  粘性定位，是一种CSS 定位方式 它让元素在
    滚动到特定阈值前表现得像相对定位，到达阈值后固定在视口中，实现类似吸顶或吸附的效果

- 业务场景
  - 结合 relative + absolute 消息提醒，在右上角
  - absolute + transform 水平垂直居中   模态框
  - fixed 回到顶部
  - sticky 粘连导航 不管页面多长 导航在超出阈值后 一直都在
      table 表头粘连  距离其最近的具有滚动机制的祖先容器
      和IntersectionObserver 有点像

- 底层
    - 定位参照系统
    absolution 最近position !== static 的祖先 || body
    fixed 视窗？ bug 
    sticky 依赖滚动容器
    - 独立图层渲染
    absolute ? + ? 

- 适当使用 transform:translate3d(0,0,0)
    GPU 硬件加速，有利于CSS 性能优化
    但也不能乱用，过多图层会增加内存和管理开销
    比如 登录弹窗，transform/opacity 动画

    will-change: 可以创建独立图层
- position:fixed 如果在 transform:translateZ(0) 下面，会失效
    transform 会有一个新的包含块  fixed 不再相对于视口定位，而是相对这个transform 容器

- 每到题都有惊喜  刺激
    面试是当面展示自己，可以准备的

## position 回答技巧
先干净利索回答五种特性，再举出应用场景，聊底层原理，图层和fixed 失效亮点

- 页面的渲染过程
- IntersectionObserver
- 重绘重排