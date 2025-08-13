# 秋招面试

## JS
- Object.assign()
- 深浅拷贝
- = JS 内存相关
- 拷贝 (简单数据类型 复印了一份) 和引用式赋值
- 怎么支持深拷贝

- 面试官的想法
- 深拷贝、浅拷贝是必考内容
- 以Object.assign() 开场
    - 表演时间  面试是当面展示自己
    API 细节 -> 业务场景(怎么用) -> 赋值 + 引用浅拷贝 -> 底层原理

    JSON.parse(JSON.stringify())  最简单的方法  问题
    不会拷贝函数(不知道怎么序列化)，Symbol，undefined，循环引用
    勾引对方考察手写深拷贝
    - 赋值和引用的概念
        简单数据类型和对象复杂数据类型  内存分配不一样

- 如何拷贝，看业务
    - 如果是简单数据类型，= 就好了
    - 如果是浅拷贝对象或数组
        Object.assign()
        Array.prototype.slice()
        Array.prototype.concat()
    - 简单深拷贝 Object.parse(Object.stringify)
        JSON.stringify()    序列化规则
        undefined、function、Symbol 不是合法的  JSON 值
    - 手写实现 高级深拷贝
        - JSON.stringify() 没办法拷贝的
        - 拷贝，简单，遍历，复杂
        - 深度，递归

- 响应式底层    
    - Object.defineProperty()
    - Proxy