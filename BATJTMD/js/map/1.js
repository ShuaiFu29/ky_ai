// NaN Not a Number
// parseInt  字符串转数字  JS 前端场景
// input 输入 -> Number
// map 要接受函数
// forEach
// console.log(['1', '2', '3'].map(parseInt))
// ['1', '2', '3'].map((num) => {
//     console.log(num)
//     return num
// })
// parseInt num 
// 第二个参数是进制
['1', '2', '3'].map((num, index, arr) => {
    console.log(num, index, arr)
    return num
})