# mcp

## Functions call

- 可以让 LLM 突破自身知识和能力局限，通过调用外部工具来或 api 来获取实时·学习，执行计算或操作，从而获取最新数据或精确计算和外部系统交互的复杂任务

## mcp Model Context Protocol

- mcp 模型上下文协议  
  - 是一个协议，web 开发的 restful 协议，如何将外部资源暴露给LLM 的协议和编程风格
      是Function Call 的升级版

      在做各种Function Call 有点乱的时候，mcp 统一了一切
    mcp 是LLM 与外界之间的通信协议，它就好像USB LLM 训练完后不了解的知识

    LLM 本身不知道怎么调用地图、数据库、搜索引擎，MCP 规定了
    标准上下文交换方式，让模型能调用API 一样去访问外部能力

## 举例
    高德地图的MCP，帮我规划从公司到机场的路线
    根据高德地图MCP 插件 获取实时的路径和交通数据

## 意义
- LLM 输出更加可靠
- 降低集成成本(自有系统和LLM集成)
- 数据安全可控
高德地图接入MCP，就像LLM的眼睛和耳朵，让AI 真正理解和使用实时世界
    

- 安装mcp 客户端 cline
- 高德地图apiKey

## mcp 的使用
- mcp server 是基于mcp 协议的服务器软件
    定义tool  ...
- LLM 
- mcp client cline/cursor
    配置mcp server
- LLM -> cline -> server Transport 通信
