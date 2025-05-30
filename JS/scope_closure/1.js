function bar() {
    console.log(myName)
}
function foo() {
    var myName = '极客'
    bar()
}
var myName = '骑士'
foo()




//闭包（Closure）是指有权访问另一个函数作用域中的变量的函数。

// 在 JavaScript 中，当一个函数在其外部被调用时，依然能够访问其定义时的作用域，这种机制就叫做闭包。闭包常用于：

// 1. 保护变量不被外部直接访问（数据私有化）。
// 2. 保持某些变量的持久性。