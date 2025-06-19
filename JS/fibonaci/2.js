// 自顶向下 fn(n) -> fn(n-1) + fn(n-2) -> 画树型结构 (方程不明显，有利于推导)
// 重复计算  函数入栈太多 退出条件 递归
// const climbStairs = function (n) {
//   if (n === 1) return 1
//   if (n === 2) return 2
//   return climbStairs(n - 1) + climbStairs(n - 2)
// }

// console.log(climbStairs(10))

// const f = []
// const climbStairs = function (n) {
//   if (n === 1) return 1
//   if (n === 2) return 2
//   if (f[n] === undefined) {
//     f[n] = climbStairs(n - 1) + climbStairs(n - 2)
//   }
//   return f[n]
// }

// console.log(climbStairs(100))

// 递归 自顶向下 计算方程  退出条件
// 自底向上思考  f(1)=1 f(2)=2 f(n)=f(n-1)+f(n-2)
// 迭代的方式(入栈不需要考虑)  也不需要额外的空间
// dp 动态规划
// 最值问题用递归
const climbStairs = function (n) {
  // dp 数组
  const dp = []
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    // 重叠子问题 每一步都拿到结果 最优子结构
    dp[i] = dp[i - 1] + dp[i - 2]  // 状态转移方程
  }
  return dp[n]
}