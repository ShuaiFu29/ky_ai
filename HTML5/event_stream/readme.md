# 流式输出

- 为什么考这道题？
  25年大厂必考题
  - LLM 聊天机器人(23年的AI 爆款 -> 24年 推理 -> 25年 AI Agent 年) AI 产品
  - 流式输出属于用户体验 前端职责所在 

- 为何需要流式输出？
  - 边生成边输出
    后端、LLM API 方式提高给我们？
    AIGenerticContent 生成式的大模型 一个token 一个token transform(google) 出来的
    "我是你的assistant" token 开销付费的
    更快的看到响应

- 前端的职责
  - 良好的用户体验
  - 尽快返回结果
  障眼法 生成要花时间 我愿意等
  最懂用户心理的

- 步骤
  - 前端能实现流式输出？
    setInterval 异步 事件机制  message

  - 后端又怎么实现？
    socket 长链接
    http 请求是基于响应式简单协议 关闭链接？
    http 2.0 server push 服务器端推送

## 全栈能力
- npm init -y 初始化项目 node 后端项目
- npm i express 老牌的node 框架
