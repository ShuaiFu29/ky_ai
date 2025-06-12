// 读取1.html 里面的内容
// 读取完后 打印 读完了
const fs = require('fs')  // 引入fs 模块
const p = new Promise((resolve, reject) => {
  // 注册一个读文件异步任务
  fs.readFile('./1.html', (err, data) => {
    if (err) {
      reject(err)
    }
    resolve(data)
  })
})

p.then((res) => {
  console.log(res.toString())
  console.log('已完成')
})