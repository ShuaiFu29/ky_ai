/**
 *  @func 反转字符串
 *  @param {string} str
 *  @return {string}
 * 
 */
//es5 函数表达式
// const reverseStr = function (str) {
//     return str.split('').reverse().join('')
// }

//es6 箭头函数  简洁  function 不要了 用简单的箭头代替
// {} 也省了 当只有一句代码的时候
// 它是返回值的时候 连return也可以省略
const reverseStr = str => str.split('').reverse().join('')
// function reverseStr(str) {
//     //str 是什么类型？ 字符串 简单数据类型 primitive 基本数据类型
//     //字符串不可变 不能改变字符串的内容
//     let arr = str.split('')
//     for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
//         [arr[i], arr[j]] = [arr[j], arr[i]]
//     }
//     return arr.join('')
// }
console.log(reverseStr('hello'));
