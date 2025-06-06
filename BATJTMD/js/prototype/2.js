// 没有class 的 js 如何在苦苦追求 OOP
// 首字母大写  约定 1. 类的概念
// 2. 构造函数
function Person(name, age) {
    // this 指向当前实例化对象
    this.name = name
    this.age = age
}
// 函数对象 原型对象
// 类的方法
Person.prototype.sayHello = function () {
    console.log(`Hello,I am ${this.name}`)
}

// new 一下 实例化对象
// new  运行构造函数
// console.log(new Person('吉他李', 18))
// let p = new Person('王五', 18)
// p.sayHello()
// // 原型对象
// console.log(p.__proto__)
// let o = { a: 1 }
// console.log(o.__proto__)
// console.log(o.toString())

var zhang = new Person('张三', 18)
console.log(zhang.__proto__)
var a = {
    eee: '鹅',
    name: '孔子',
    country: '中国'
}
zhang.__proto__ = a
console.log(zhang.__proto__)
console.log(zhang.country)
console.log(Person.prototype)
console.log(Person.prototype.constructor === Person)
console.log(zhang.eee)