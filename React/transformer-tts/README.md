# React   Transformer TextToSpeech

- transformer
    transformer.js JS AI 机器学习库
    来自于huggingface 全球最大开源大模型社区
    将模型下载到浏览器端  JS 开发者智能战场未来

- 项目的亮点
    - 使用transformer.js 的端模型
    - 使用taildwindcss 原子CSS 几乎不需要些样式
        类名文档语义很好，特别适合AI  生成
        高效解决适配 w-full + max-w-xl
    - webworker nlp 任务
        1. 延迟加载大模型
        2. 在现在组件后再实例化 性能好
        3. 卸载时移除事件
    - 封装组件
- 项目的难点
    - 单例模式封装  MyTextToSpeechPipeline
    - getInstance 只实例化一次
    - 懒执行
