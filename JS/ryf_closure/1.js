// 作用域
// 作用域链 内部的可以访问外部的变量
// 函数外部无法读取函数内的局部变量
// 全局作用域
// var n = 999

// function fn1() {
//   // 没有使用var 声明 会自动挂载到全局
//   b = 123
//   // 函数作用域
//   {
//     // 块级作用域
//     let a = 1
//   }
//   console.log(n)
// }

// fn1()

// // 让局部变量可以在全局访问
// function fn1() {
//   // 局部变量
//   var n = 999  // 自由变量
//   function fn2() {
//     console.log(n)
//   }
//   return fn2
// }

function fn1() {
  var n = 999
  nAdd = function () {
    n += 1
  }
  function fn2() {
    console.log(n)
  }
  return fn2
}
var result = fn1()
result()
nAdd()
result()