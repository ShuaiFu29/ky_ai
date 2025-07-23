# jwt 登录鉴权
- isLogin  user 全局状态 zustand
- mock 登录状态
    - apifox  api 模拟请求
    不用写页面，就可以发送请求
    curl 
- 会话授权
    - 服务器知道我们是谁？
    - http 是无状态的
        - 请求头 cookie
        - server 种下一个cookie  唯一sid 值  sid => user
        - 每次请求中  从cookie 读取sid
        - 服务器多了就知道我们了
    - 登录和用户鉴权方案JWT JSON Web Token
        - {id:1,username:'admin',level:4,...}
        - 一种算法  生成一个hash  串
        - token 服务器端令牌
        - 带上token
        - decode 解码
           {id:1,username:'admin',level:4,...}
- jsonwebtoken
    jwt 鉴权的库
    sign  颁发一个token  user  secret   secret
    decode secret 验证token  user
    - pnpm i jwt
    - import jwt from 'jsonwebtoken'
    - sign
    - HTTP 请求头  Authorization 
    - Cookie 每次自动带上
    - token 需要手动设置的