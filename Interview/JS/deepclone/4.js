let arr1 = [
  {
    name: 'zhangsan',
    hobbies: ['篮球']
  },
  function () {
    console.log('拷贝不了')
  }
]

let arr2 = JSON.parse(JSON.stringify(arr1))
arr2[0].name = 'zhangsan深拷贝'
arr2[0].hobbies.push('吃饭1')
console.log(arr1, arr2)