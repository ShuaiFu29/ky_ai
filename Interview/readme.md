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


## Git
开发中如何使用git 的
- 安装开发环境
    - node
    - git 环境  开源的分布式版本管理软件
    - 公司是发放一个git 账号，私有项目

- git config --global user.name ""
  git config --global user.email ""  
- 入职 git clone 公司的代码
    - 主分支  main/master
        所有人都在用的，线上分支
    - 新开一个分支
    在自己的工作任务分支
    git checkout -b xxx
    git branch
    git checkhout main
- 常用命令
    git pull origin main 每天上班前的动作
    git status 当前git 状态 
    git log --online 查看提交记录
    git add . 提交到暂存区
    git commit -m ""    提交到仓库
    git push origin main 提交到远程仓库
- 场景
    - 回退
    git restore --staged xxx