// // 'use strict'
// var b = 10;
// (function b() {
//     b = 20  // 不生效
//     console.log(b) //[Function: b]
// })()

// 一句代码 v8引擎 变量提升 编译阶段 执行阶段 
// 全局作用域中的变量
var a = 1
// console.log(window.a) // window is not defined server 没有window
console.log(global.a)   // node 顶层对象
