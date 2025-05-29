let a = 123456789012345678901234567890123456789n
// console.log(a + 1)
// console.log(typeof a);
const bigNum1 = 123456789012345678901234567890123456789n
// BigInt 申明方式 函数声明
const bigNum2 = BigInt(123456789012345678901234567890123456789)
const bigNum3 = BigInt("123456789012345678901234567890123456789")
// 报错 BigInt 是简单数据类型 不是对象 不能使用new 申明 
// const bigNum4 = new BigInt('123456789012345678901234567890123456789')
console.log(bigNum1)
console.log(bigNum2)
console.log(bigNum2)
console.log(bigNum4)
