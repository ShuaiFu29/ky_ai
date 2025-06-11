# 智能前端之语音
- AI 时代新的交互体验，语言交互
  虚拟数字人 AIGC 文字 -> 语言
  
- 敏感信息
  .gitignore 哪些文件不用提交到远程 仓库也不进入
  node_modules/  太大了 没有必要提交 npm install

- 环境变量
  .env.local 本地环境变量  . 开头 本地项目需要的key
  添加到.gitignore 里面

- 单向数据流
  input value {prompt}
  保持数据状态和界面统一
  UI = f(state)  驱动界面
  onChange 修改

- base64 格式
  