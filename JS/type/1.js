// 函数编写者
// 函数调用
//健壮性
//typeof 运算符 数据的类型
//判断简单基础数据类型，除了null
//返回值是类型的字符串

/**
 * @func 两数之和
 * @param{number} a
 * @param{number} b
 * @return{number}
 */

function add(a, b) {
    // 参数的校验
    if (typeof a !== 'number' || typeof b !== 'number' || !isFinite(a) || !isFinite(b)) {
        throw new TypeError('a 和 b 必须是数字')
    }
    return a + b;
}
console.log(add(1, 2))
console.log(add(1, NaN))
console.log(add(1, Infinity))