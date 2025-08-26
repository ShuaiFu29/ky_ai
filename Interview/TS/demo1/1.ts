let a: any = 1    // any 任何类型   ts 新手 狂用 any

a = '1'   // 不能滥用，学会用泛型

// function getFirstElement(arr: any[]): any {
//   return arr[0]
// }


// const numbers = [1, 2, 3]
// const firstNum = getFirstElement(numbers)

// // 复用性   函数参数，返回值 指定类型
// const strs = ['a', 'b', 'c']
// const firstStr = getFirstElement(strs)

// 复用这个函数的同时，传个类型参数

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined
}

const numbers = [1, 2, 3]
const firstNum = getFirstElement<number>(numbers)
firstNum?.toFixed(2)

