# promise
- CPU 轮询
- 同步任务，异步任务
  异步任务比较花时间
  先跳到后面的顺序去执行
- 111 输出放在后面
  控制执行的顺序

## Promise 的底层理解
画个饼
- 异步任务需要些时间 不管的话，跳到后面执行
  代码可读性不好，代码编写顺序和执行顺序不一致
- const p = new Promise((resolve,reject)=>{

  })
  类  专门用于解决异步问题
  prototype  then 方法
- 异步任务放到这个fn
- fn 里面的异步任务做完了  reslove/reject
- p.then(()=>{
    就可以运行
  })
- 我们把任务放到then 里面就可以把执行的流程交给resolve 来处理

## **控制执行流程**的es6 套路
- new Promise()  // 请Promise 类 控制异步流程专业
- (resolev) =>{ // executor 耗时性的异步任务
    异步任务 setTimeout readFile fetch ...
  }
- then 原型方法
- resolve() then 函数执行 
- promise .then  升级到 async await  成对出现
  async 用于修饰函数 函数里有异步任务
  await 等待异步任务完成，异步变同步