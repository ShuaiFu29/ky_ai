// Object.defineProxy

var obj = {}  // 对象

// es5 就提供的API  兼容性
// React 和 Vue 最先版本  对浏览器有要求
Object.defineProperty(obj, 'num', {
  value: 1,
  // 属性描述
  configurable: true,
  writable: true,
  enumerable: false
  // get: function () {
  //   console.log('读取了属性')
  //   // return this.num
  // }
})

obj.num = 2
console.log(obj.num)
delete obj.num
console.log(obj.num)
