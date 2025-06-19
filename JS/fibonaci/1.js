// 递归
// 相似的问题
// 自顶向下的思考 问题的终点
// 退出条件
// 重复计算
// 树状结构
// function fib(n) {
//   if (n <= 1) return n
//   return fib(n - 1) + fib(n - 2)
// }

// console.log(fib(10))

// 如何用闭包优化fib
// 记忆功能
function memoizedFib() {
  // 闭包  函数嵌套函数
  // 自由变量
  const cache = {}   //存储
  return function fib(n) {
    if (n <= 1) return n  // 退出条件、
    if (cache[n]) return cache[n]
    cache[n] = fib(n - 1) + fib(n - 2)
    return cache[n]
  }
}
// 可以在外部访问
const fib = memoizedFib()
console.log(fib(10))