## 盒子模型

- 文档流
  doctype
  从上到写 (块)，从左到右(行内)，像水流一样去显示我们的页面 流体布局
  html 标签 从外到内(层级) 从上到下(布局 盒子能力) 从左到右(布局)

- html 元素的时候，一个盒子
-  盒子，页面的占位就清楚了。
- 盒子的尺寸 由哪些部分构成？
  - 内容 width x height
  - 内边距 padding
  - 边框 border
  - 外边距 margin

- 页面怎么显示的？
  - 将元素和css，了解它作为一个盒子，在文档流中的大小和位置
  - 盒子模型 = 内容 + 内边距 + 边框 + 外边距
  2种算法
  - 标准盒模型(默认)  box-sizing : content-box;
    width/height = content
  - 怪异盒模型  box-sizing : border-box;
    width/height = content + padding + border

- 布局
  多列式布局
- 页面的显示 = 文档流 + 页面布局(弹性、浮动、定位) + 盒模型(标准，怪异) + 离开文档流(绝对定位)
  