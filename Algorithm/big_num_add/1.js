/**
 * @param {string} num1
 * @param {string} num2
 * @return {string} 
 * 
 */
function addLargeNumber(num1, num2) {
    let res = ''  //存储结果
    let carry = 0  //存储进位
    let i = num1.length - 1
    let j = num2.length - 1
    while (i >= 0 || j >= 0 || carry) {
        // 边界条件
        let digit1 = i >= 0 ? num1[i] - '0' : 0
        let digit2 = j >= 0 ? num2[j] - '0' : 0
        let sum = digit1 + digit2 + carry
        res = (sum % 10) + res
        carry = Math.floor(sum / 10)
        i--
        j--
    }
    return res
}