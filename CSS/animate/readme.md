# 动画
从url 输入到页面渲染

- transform  过渡
- transform  变换
- animation  关键帧动画
- js 动画
  - DOM 对象
  - 频繁修改DOM 节点的style 属性
  - requestAnimationFrame
    请求  动起来 帧
    保持DOM 动画和屏幕的刷帧率一致
    递归调用
- web 程序
  - 浏览器程序 c++
  - 输入是html css
  - 输出静态页面
  - DOMContentLoaded 事件还没有完成页面渲染
  - setTimeout(()=>{},0) 会以页面渲染优先

- js 动画和css transition 动画选择哪一个？
  - js 复杂
    - 性能差 不推荐
    - 频繁的操作DOM js 性能开销的主要问题
      页面的重新绘制 (开销大)
  - css
    - 性能好
      比js 省去DOM 对象的操作
      transition 不用去不停的绘制？ 真不会那么像js 一样触发那么多次的重新绘制。

- DOM 树的构建
  - 字节开始网络层的传输
  - 转换 根据编码utf-8 ,html 字符串
  - 令牌化(Token) 令牌 标签名 属性名 解析
  - 可以转成一个DOM 节点对象
    <div id='box'>
      ...
    </div>
    {
      type:'div',
      attrs:{
        id:'box'
      },
      children:[
        ...
      ]
    }
  - DOM 树的构建
    以树 数据结构的结合，在查找和操作这块，非常的高效 作为render 的输入
  
- CSSOM 树的构建
  - 从字节码开始

- DOM 树和CSSOM 树 结合 生成 renderTree
- Layout 布局 BFC 盒子模型和大小计算
  文档流的定位和大小 计算在屏幕上的确切位置
  应用规则和计算的过程
- 图层
  平面 z-index 离开文档流absolute  transform opacity 
  新的图层来计算  新的图层来绘制 (修改的时候只要改这一个涂层)
  GPU 去计算 性能好

- 绘制出来  画图一样
  一个个像素点 渲染到屏幕上

- 第一次的绘制
- 更新？ JS transition
  - 修改了它的颜色 背景颜色 重新绘制  重绘
  - 修改了它的盒子 重新排版  重排 开销大 js width 的改变
  - transition left 的修改，position:absolute;  离开文档流