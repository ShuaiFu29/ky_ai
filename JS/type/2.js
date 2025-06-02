// 独一无二的值
const sym = Symbol()
const sym1 = Symbol()
const sym2 = Symbol('desc')  //label 标签
// console.log(sym, typeof sym)
// console.log(sym1 === sym)
// symbol 可以用于对象的key
//使用Symbol 构造函数实例化 一个标记为ID的唯一值
const ID = Symbol('id')
const sex = '男'
const num = 1
// console.log(ID)
//es6 之前 key string
//es6 之后 Symbol 作为key
const user = {
    name: '张三',
    [sex]: '男',
    [ID]: 123,
    [num]: 2,
}

//面向对象私有属性 用Symbol 可以提供对象的隐私
// for (let key in user) {
//     console.log(key, user[key])
// }

const STATUS = {
    READY: Symbol('ready'),
    RUNUING: Symbol('running'),
    DONE: Symbol('done'),
}
let state = STATUS.READY
if (state === STATUS.READY) {
    console.log('ready')
}