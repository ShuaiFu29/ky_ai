console.log('同步Start')
const promise1 = Promise.resolve('First Promise')
const promise2 = Promise.resolve('Second Promise')
const promise3 = new Promise(resolve => {
  resolve('Third Promise')
})
promise1.then(res => {
  console.log(res)
})
promise3.then(res => {
  console.log(res)
})
promise2.then(res => {
  console.log(res)
})
setTimeout(() => {
  console.log('setTimeout')
}, 0)
console.log('同步End')