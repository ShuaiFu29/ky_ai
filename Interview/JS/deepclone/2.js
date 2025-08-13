// # 怎么用的  参数的默认值
//  默认值 用户会传的  Object.assign 收入囊中
// Option 是会传入的对象
// 目标对象是{} 空对象 合并用户传参和默认参数

// function createUser(options) {
//   const defaults = {
//     name: '匿名用户',
//     age: 18,
//     isAdmin: false
//   }
//   const config = Object.assign({}, defaults, options)
//   console.log(config)
// }

// createUser({
//   name: 'zhangsan',
//   age: 25
// })

// const baseConfig = {
//   api: './api',
//   timeout: 500
// }

// const envConfig = {
//   timeout: 10000,
//   debug: true
// }

// const finalConfig = Object.assign(
//   {},
//   baseConfig,
//   envConfig
// )
// console.log(finalConfig)

// const s = Symbol('id')  // 独一无二
// Symbol 也会拷贝 拷贝可枚举属性
// const source = {
//   [s]: 123,
//   a: 1
// }

// const target = []
// Object.assign(target, source)
// console.log(target)


// 拷贝
let a = 100
let b = a

b = 200
