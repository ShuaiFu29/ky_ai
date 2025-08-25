# 性能优化

## 重绘重排

- 重绘
    当元素样式改变不影响布局时，浏览器重新绘制元素的过程。如改变颜色、背景等
- 重排
    DOM 元素的尺寸、位置发送改变时，浏览器需要重新计算布局，影响其他元素位置的过程
    重排一定会触发重绘，重绘不一定会触发重排

## DEMO 1 批量修改DOM

```js
// 不对 多次操作可能触发多次重排重绘
// 虽然现代浏览器会批量更新 合并修改  优化
// 但是可以避免
const el=document.getElementById('myEl')
el.style.width='100px'
el.style.height='100px'
el.style.margin='100px'
// good
el.style.cssText='width:100px;height:100px;margin:100px'
el.className='my-class'   // 用类名而不是一堆的JS 代码
```

### 使用文档碎片

```
const fragment=document.createDocumentFragment()
for(let i=0;i<10;i++){
  const el=document.createElement('div')
  fragment.appendChild(el)    // 没有重排
}
document.body.appendChild(fragment)
// 批量添加元素，使用document.createElementFragment() 优化
```

## 脱离文档流进行操作 下线

```js
const el=document.getElement('myEl')
el.style.position='absolute'
el.style.display='none'
//  进行大量DOM 操作
el.style.display='block'
el.style.position='static'
```

### 缓存布局信息

```js
// offsetTop  读取， 每次都会触发重排以获得盒子的布局信息
for(let i=0;i<100;i++){
  el.style.top=el.offsetTop+1+'px'
}

let top=el.offsetTop  // 缓存布局信息
for(let i=0;i<100;i++){
  top++
  el.style.top=top+'px'
}

```

### 使用transform 代替位置调整
```js
el.style.left='100px'
// 只触发重绘性能更好
el.style.transform='translateX(100px)'

```

## 资源加载优化

- 图片懒加载
- 路由懒加载
    代码文件上  code spliting 代码分割
- 资源预加载
    未来可能会用到的资源
    <link rel='prefetch' href='/next-page.js'>
    dns-prefetch  dns 预解析
    preload 当前页面必须加载资源，理解加载
  - script 资源的加载 阻塞的
      默认没有
      async 并发 
      defer 
      module  // 功能
  - webp 格式图片
      图片的优化，显著的减少体积，并且质量不受影响
  - 图表字体库
      减少http 请求数
## JS 执行优化
    - 防抖节流
    - web workers 处理复杂计算
    - requestAnimationFrame  优化动画
    - requestIdleCallback   react fiber 机制
        schedule 机制

## 框架层优化
    - memo、useMemo、useCallback  避免不必要的渲染
    - shadcn-ui 按需加载组件库
    
    - 合理使用key 优化列表渲染

## 缓存策略
    - 强缓存和协商缓存
        Expires(客户端时间可能不准确) / Cache-Control   不发送请求
        LastModified if-modified-since  时间戳  304
        Etag if-none-match
    - localStorage/sessionStorage/cookie

## 网络优化
  - CDN 加速
      静态资源，分流，会缓存文件
      多路复用  多域名服务器 img1.baidu.com img.baidu.com
  - Gzip 压缩
  - HTTP/2 多路复用
  - DNS 预解析

## 首屏优化
- SSR
    组件渲染在服务器端已经完成编译、执行，浏览器端直接显示
- 骨架屏
- http 2.0 server push push 首屏数据推送