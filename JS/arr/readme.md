# Array 的高级考点？

- 怎么认识数组？
    - 可遍历的对象
- new Array(5)
    类似于c++  固定大小的分配 v8 引擎对Array 设计
    - 灵活的扩展  不限类型 还有hash 的特性
    - empty*5  key 没有释放  for key in 不可以迭代
    - new Array(5).fill(undefined) 统一
- [] 数组字面量
    [1,2,3...]
- 静态方法
    Array.of(1,2,3)  // 已经有了数组
    Array.from()  // 转换，(类数组，填充的计算)