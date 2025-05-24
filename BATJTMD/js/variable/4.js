//全局的 js 代码在执行之前会先有个编译过程
//变量提升了
if (false) {
    var value1 = 1  //申明变量
}
console.log(value1)  //undefined
//-----------------
if (false) {  //块级作用域
    let value2 = 2
}
// console.log(value2) //Error: value2 is not defined 在全局中找不到

function fn() { //函数作用域
    let a = 1
    if (true) {  // let支持块级作用域(高级语言特性)  var不支持块级作用域
        var b = 2
    }
    console.log(b)
}
fn()