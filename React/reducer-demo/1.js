
// 纯函数
// 相同的输入，相同的输出
// 没有副作用  不操作变量 不发生请求 不该DOM
// 管理数据状态  用纯函数去管  全局状态更正确
// 全局状态更重要  一堆的地方都有用到它
// 修改值  修改方法 流程

function add(a, b) {
  return a + b
}


// 不纯函数

let total = 0
function addTotal(a) {
  return total += a
}

addTotal(1)
addTotal(2)
console.log(total)







