console.log('Start')  //1
// process 进程对象
process.nextTick(() => {
  console.log('nextTick')  //3
})
Promise.resolve().then(() => {
  console.log('Promise Resolve')  //4
})
setTimeout(() => {
  console.log('haha')  //5
  Promise.resolve().then(() => {
    console.log('inner Promise')  //6
  })
}, 0)
console.log('End')  //2