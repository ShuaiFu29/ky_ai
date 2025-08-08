// 不是JS 单线程
// Worker 线程  复杂或耗性能的计算
// 这个能力来自于浏览器
// JS 还是单线程，只不过在复杂计算时候用worker 线程
// 不可以使用document this  不是原来的this
// 线程间的通信，消息机制
// self

// console.log(this)
// console.log(document.getElementById('box'))


self.onmessage = function (e) {
  console.log(e.data)
  self.postMessage('hell from worker')
}

