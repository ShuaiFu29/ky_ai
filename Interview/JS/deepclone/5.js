// const target = {
//   field1: 1,
//   field2: undefined,
//   field3: 'hxt',
//   field4: {
//     child: 'child',
//     child2: {
//       child2: 'child2'
//     }
//   }
// }

// // 递归 + 拷贝
// // 对数组支持不好
// // console.log(JSON.parse(JSON.stringify(target)));
// function clone(source) {
//   if (typeof source === 'object') {
//     let cloneTarget = {}; // 分配新空间
//     for (const key in source) { // 遍历
//       cloneTarget[key] = clone(source[key])
//     }
//     return cloneTarget
//   } else {
//     return source;
//   }
// }

// let obj = clone(target)
// obj.field4.child = 'objchild'

// console.log(obj, target)

// es6 的新数据类型 hash Map
// function clone(target,map=new WeakMap()) {
//   if (typeof target === 'object') {
//     let cloneTarget = Array.isArray(target) ? [] : {}
//     if (map.get(target)) {
//       return map.get(target)
//     }
//     for (const key in target) {
//       cloneTarget[key] = clone(target[key],map)
//     }
//     map.set(target,cloneTarget)
//     return cloneTarget
//   } else {
//     return target
//   }
// }



const obj = { a: 1, b: 2 }
// 太常用，大型语音都内置的 [] {}
// HashMap 字典 O(1)  key:value
const target = new Map()  // 实例化es6 新的数据结构
target.set('c', 3)
// console.log(target.get('c'))
target.set(obj, 4)  // 和JSON 不一样的地方  对象做key
// console.log(target.get(obj))

let obj2 = { name: '释永信' }
const target2 = new WeakMap()  // Weak 弱的
target2.set(obj2, 'code')
obj2 = null   // 内存垃圾回收
console.log(target2.get(obj2))