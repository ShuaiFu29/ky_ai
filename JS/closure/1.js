// 函数对象
// function add() {
//   // arguments 函数运行时决定，参数总管
//   // 通过下标访问第几个参数  数组
//   let res = 0
//   // console.log(arguments.map(item => item + 1))  // 报错 类数组对象不能使用map方法
//   // 类数组 有length属性 可以迭代 但是没有数组太多的方法
//   // 如何将类数组转成真正的数组？
//   const args1 = Array.from(arguments)
//   const args2 = [...arguments]
//   const args3 = Array.prototype.slice.call(arguments)
//   console.log(arguments.length, Object.prototype.toString.call(arguments))
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i] + '---')
//     res += arguments[i]
//   }
//   return res
//   // return a + b + c
// }
// console.log(add(1, 2, 3))

function add(a, b, c) {
  return a + b + c
}
add(1, 2, 3)
// 柯里化  手写curry 函数

function curry(fn) {
  // 逐步的去获取函数需要的参数，当到底fn 需要的参数数量时，执行结果
  // 返回一个函数 
  // fn ？ 参数 最终要执行的功能  闭包中的自由变量  词法定义环境
  // curry 函数 包装fn 慢慢收集参数
  // ...args 所有的参数 自由变量
  return judge = (...args) => {
    // es6 reset 运算符
    // 任何地方都可以访问到定义时候的fn
    if (args.length >= fn.length) {
      // 递归推出条件
      return fn(...args)
    }
    return (...nextArgs) => judge(...args, ...nextArgs)
  }
}
let addCurry = curry(add)
console.log(addCurry(1)(2)(3))

// 函数参数的收集
function fn(...args) {
  console.log(args)
  return (...nextArgs) => {
    const arr = [...args, ...nextArgs]
    console.log(arr)
  }
}
fn(1, 2, 3)(4, 5, 6)