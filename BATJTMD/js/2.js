//数组对象
const arr = ['1', '2', '3']
console.log(typeof arr)
const date = new Date()
console.log(typeof date)
//如何区分Object的这些类型？
console.log(Object.prototype.toString.call(arr))
// 会在MDN文档看一些资料
function myTypeof(value) {
    //string api的选择 slice 字符串截取
    return Object.prototype.toString.call(value).slice(8, -1)
}
console.log(myTypeof(arr))