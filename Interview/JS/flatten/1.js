// const flatten = arr => {
//   let res = []
//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       res = res.concat(flatten(item))
//     } else {
//       res.push(item)
//     }
//   }
//   return res
// }

// reduce [] => 1 项
// 多维数组 => 1 项 1 纬数组
// reduce 方法把数组合并成一个值

// const flatten = arr =>
//   arr.reduce((acc, cur =>
//     acc.concat(Array.isArray(cur)?flatten(cur):cur)),[])

// 栈模拟

function flatten(arr) {
  // stack  递归  LIFO
  const stack = [...arr]
  const res = []
  while (stack.length) {
    const item = stack.pop()
    if (Array.isArray(item)) {
      stack.push(...item)
    } else {
      res.push(item)
    }
  }
  return res.reverse()
}