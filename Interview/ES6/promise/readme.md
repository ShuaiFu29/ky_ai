# Promise.all

- MDN 定义
    Promise.all 方法接收一个promise 的**iterable** 类型的输入 (Array Map Set 都属于ES6 的iterable 类型)
    并且只返回一个Promise  实例。输入的所有promise 的resolve 回调结果是一个数组，并按顺序存放。
    只要任何一个输入的reject 回调执行，就会抛出错误，Promise.all 的promise 失败，catch 执行。rejcet 是第一个抛出的错误

    如果有promise 子项失败，那么其他还没有完成promise 会继续执行，只不过结果不重要。

- race  any allSettled
    这一组Promise 上的静态方法，带来了prmoise 的并行
    async await 简单，不需要链式调用  优雅的异步变同步，但也不能乱用，它是串行
    如果多个promise 值前后有依赖 async/await 有优势，但如果没有呢？ Promise.all 并发更快

    如果有并行业务的需求，all/race/any/allSettled 更加适合且高效

-
Promise.all()	全成功才成功：所有 Promise 都 fulfilled 时，它才 fulfilled；任何一个 rejected，它就立即 rejected。
Promise.race()	谁快听谁的：哪个 Promise 最先完成（无论 fulfilled 或 rejected），它的结果就决定了 Promise.race() 的最终状态。
Promise.any()	首个成功即成功：只要有一个 Promise fulfilled，它就立即 fulfilled；只有当所有 Promise 都 rejected 时，它才 rejected（返回 AggregateError）。
Promise.allSettled()	全部完成才结束：等待所有 Promise 都 settled（fulfilled 或 rejected），然后返回一个包含每个 Promise 结果（含状态和值/原因）的数组。