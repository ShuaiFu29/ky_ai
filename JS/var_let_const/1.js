//变量提升至当前作用域顶部
//代码
//编译阶段，一霎那间，帮我们实现语法检测，做点准备(变量查找)
//变量提升是面试官喜欢的，js开发者设计的
//变量提升不好，代码的执行结果和代码阅读顺序不一致，有歧义
//糟粕，避开 申明变量不再使用var 用了let 
showName()  //驼峰式命名
console.log(myName)

var myName = '张三'

function showName() {
    console.log('函数执行了')
}
