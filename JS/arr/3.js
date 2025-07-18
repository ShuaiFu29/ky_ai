// const arr = new Array(5)

// let obj = {
//   name: '葫芦娃'
// }
// let obj2 = {
//   skill: '喷火'
// }

// obj.__proto__ = obj2
// console.log(obj.skill)
//   in 会去原型链上找
// for (let key in obj) {
//   console.log(key)
// }


// 如何遍历数组
// for(let i=0 ...) 计数循环  性能好  可读性不好
// while filter find some every ...
// for of

// const names = Array.of('Alice', 'Bob', 'Charlie', 'David')
// // console.log(names)
// names.forEach(name => {
//   if (name === 'Charile')
//     console.log('Stop!!!')
// })

// // 消灭数组  留下一个
// // reduce  函数负责在繁杂的case 下只有唯一的对的状态产生
// // 新的状态基于上一个状态
// console.log([1, 2, 3, 4].reduce((pre, cur) => {
//   return cur + pre
// }, 0))

// 可迭代对象  比计数循环可读性更好
const arr = [1, 2, 3, 4]
for (let item of arr) {
  console.log(item)
}

// for of item 还有拿到index ？
// item 每一项都是数组  第一项是key 第二项是值
for (const item of arr.entries()) {
  console.log(item)
}

// 迭代器
console.log(arr.entries())
