let a = 'abc'
let b = new String('abc')
console.log(a == b)  // 值相等
console.log(a === b)  // 类型不同
//JS 给所有的基本类型都添加了一个包装类
// 包装类是一个对象  可以调用对象的方法
a.split('')
//为了统一面向对象写法
//JS 会主动把简单数据类型包装成对象
// a-> new String(a)
console.log(typeof a)
//之后会销毁对象，回归原来的简单数据类型