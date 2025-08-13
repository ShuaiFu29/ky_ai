
// let obj1 = {
//   naem: 'zhangsan',
//   age:20
// }

// let obj2 = obj1  // 不是复印，引用传递  没有实现拷贝
// obj2.age = 30

// let arr1 = [1, 2, 3]
// let arr2 = arr1
// arr2.push(4)

const arr1 = [1, 2, 3]
const newArr = [...arr1]

// let arr2 = arr1.slice()
// arr2[1] = 'b'
// console.log(arr2, arr1)

const arr3 = [[1, 2], [3, 4], [5, [6, 7]]]

let arr4 = arr3.slice()
arr4[2][1][1] = 8
console.log(arr4, arr3)

// let arr5 = arr3.concat()  浅拷贝


