// node 运行  global 顶级对象

// global.gc()   // 手动触发垃圾回收

console.log(process.memoryUsage())

let map = new Map()
let key = new Array(1000000)
console.log(process.memoryUsage())

map.set(key, 1)
key = null
console.log(process.memoryUsage())
map = null
console.log(process.memoryUsage())