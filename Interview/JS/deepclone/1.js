// 有两个容器，盒子A 放有钥匙，钱包
// 盒子B 放有手机，充电宝、

// const target = { a: 1 }
// const source = { b: 2 }
// const source2 = { c: 3 }

// const result = Object.assign(target, source)
// result.b = 11
// console.log(source)
// console.log(result, target)

// const target = {
//   a: 1,
//   b: 2
// }

// const source = {
//   b: 3,
//   c: 4
// }
// Object.assign(target, source)

// console.log(target)

// const target = {
//   a: 1
// }

// const source = {
//   // 对象的嵌套
//   b: {
//     name: '小明',
//     hobbies: ['篮球', '足球']
//   },
//   c: 1
// }
// // 浅拷贝
// Object.assign(target, source)
// source.b.name = '小白'
// source.b.hobbies.push('吃饭')

// console.log(target, source)
// console.log(source.b.name, source.b.hobbies)

// 常用的深拷贝

// const newObj = JSON.parse(JSON.stringify(source))
// console.log(newObj)
// newObj.b.name = '444'
// newObj.c = 2
// console.log(newObj)
// console.log(source)

// const target = {
//   a: 1
// }
// // 如果源对象是简单数据类型 它会忽略
// Object.assign(target, null)
// Object.assign(target, undefined)
// Object.assign(target, 12)
// console.log(target)


// // Object.assign(undefined, { a: 1 })

// const obj = { name: '张三' }
// Object.assign(obj)


// 请问，你在项目开发中具体使用过吗？
// 合并参数