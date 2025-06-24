// 完成的功能
// function objectFactory() {
//   let obj = {}
//   // 类数组上没有shift 方法，所以借用数组的shift 方法
//   let Constructor = [].shift.call(arguments)  // 获取第一个参数 构造函数
//   obj.__proto__ = Constructor.prototype
//   let res = Constructor.apply(obj, arguments)
//   // || null 的情况 仍然会返回object 构造函数return 简单类型 忽略
//   return res instanceof Object ? res || obj : obj
// }

function myNew(Constructor, ...args) {
  let obj = {}
  obj.__proto__ = Constructor.prototype
  let res = Constructor.apply(obj, args)
  return typeof res === 'object' ? res || obj : obj
}

// new Person(...) -> function [[construct]] ->
// {} && this -> {} -> [[call]] -> {}.__proto__ ->
// Constructor.prototype -> return {}

function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayHello = function () {
  console.log(`你好，我是${this.name}，今年我${this.age}了!`)
}


// let p = objectFactory(Person, '张三', 17)
// p.sayHello()
// console.log(p)
// console.log(Object.prototype.toString.call(p).slice(8, -1))