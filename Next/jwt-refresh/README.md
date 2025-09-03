# next.js 全栈项目

- users & posts
- jwt 双token 鉴权
- 虚拟列表
    AI 爬虫 掘金100 条数据
- 大文件上传
- AI 工程化
    流式输出
    function Tool
    MCP
- AI 搜索

## 双token
单token localStorage  长期  第三方请求拦截  不安全
安全 + 无感刷新登录
双token 
- accessToken 校验身份  重要 有效期变短 小时为单位 cookie
    过期怎么办？
- refreshToken 刷新 7d 时间长
    没有过期，refreshToken 发到服务器 /api/auth/refresh 
    返回新的accessToken 无感刷新
- refreshToken 过期后，去登录

## 开发流程
- .env
    mysql url
- prisma 初始化
    ORM 工具  
    Object Relation Mapping
    User(表) => User类
    一行     => new User() 实例
    底层数据库操作 映射成 高级的面向对象操作
- Prisma Schema 是定义数据库模型、关系和数据类型的配置文件，
用于生成类型安全的数据库客户端。
  数据库的设计图
  navicat 好的地方 schema + git 留下数据设计和修改的历史
  文档型的  可以追踪  留底
- Model 表的映射模型
  @@map('users')    指定模型对应的表名
  posts   Post[]    一对多的关系
  createdAt updatedAt prisma  自动维护
  @id 主键  @unique 唯一索引
  Model User{
    columns name type @default
    索引
    relation
  }

  - migration 迁移
      记录
- restful API
- lib/复用的JS 模块
- RegExp
    前端 后端都要会正则
    /^.+?[]{} $/   test
    ^ 开始 $结束  ^$ 严格匹配整个字符
    . 都匹配  一个字符
    ? 零次或一次
    + 一次或多次
    [] 范围
    {} 长度
- bcryptjs 加密js 模块  单向的加密算法 (不能被解密)
  register  加密一次
  login   password  加密一次
  比较的加密后的串是否一样？
- 状态码
    - 200 OK
    - 201 Created
    - 400 Bad Request
    - 401 Forbidden
    - 409 Conflict
    - 500 Internal Server Error

- middleware 的概念
    中间件  配置一个白名单
    /dashboard
    Middleware 是中间件，用于在请求和响应之间执行预处理逻辑，如日志、认证、数据解析等。
    - 配置一个需要登录的页面数组
    - some startWith
    - NextResponse.next()    放行
    - NextReponse.redirect() 跳转

    - 通过jwt verify 方法拿到payload 后，添加自定义的请求头
        x-user-id
        后续页面就可以拿到这个值

- JWT 的构成
    - 头部
        签名算法  HS256
    - 载荷
        {userId:...}
    - 签名
        secretKey
- cookie
    httpOnly:true
    HttpOnly 可防止 JavaScript 访问 Cookie，有效抵御 XSS 攻击导致的令牌泄露。
    服务器端设置
    SameSite 可防止跨站请求伪造（CSRF）攻击，限制 Cookie 在跨域请求中的自动发送，提升安全性。
    
- 后端安全和性能
  - 一定要做容错处理
      try{}catch{}finally{}
  - 释放数据库对象
- prisma client 的CRUD 方法
    prisma.user.create()
    prisma.user.findUnique()
    prisma.user.update({
      where:{},
      data:{}
    })

## 大文件上传
当文件比较大的时候，由于各种原因，容易失败，而且上传数组慢
一旦失败，它需要重新上传，会让用户沮丧

采用分片上传策略(并发，并发限流) 将文件切分为多个小块
并行上传，提升稳定性和效率。上传前通过WebWorker 计算文件整体
以及分片的hash 向服务器校验，若文件以及存在则直接秒传。
前端记录上传进度和已成功分片，支持断点续传，避免重复上传。
服务器按序接受分片，存储后进行合并并检验最终的完整性，
结合唯一标志和分片索引，确保上传安全可靠。整个过程
配合进度条和错误重试机制，提升用户体验与系统健壮性。

- worker hash 计算
- 性能优化
    上传文件的处理函数 handleFile 使用useCallback 缓存
    避免重复创建
- typescript 的使用
    - 主线程和worker 线程间的通信，数据约定
    - HashWorkerIn 和HashWorkerOut
        as 断言