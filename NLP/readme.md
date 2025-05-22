# 机器学习
- notebooklm
  你不知道的JavaScript深入学习
  生成AI 博客
- modelscope
  阿里开源大模型社区
- python notebook
  ipynb 后缀
  NLP  机器学习文档格式
- python
  NLP 第一语言
  JS 也挺好
- 引入了pipeline 模块
  model 中国第一大模型社区
  魔搭
  from modelscope.pipelines import pipeline
  from modelscope.utils.constant import Tasks
  semantic_cls = pipeline(Tasks.text_classfication,'damo/nlp_structbert_sentiment-classification_chinese-base')
  打分 label分类
  result = semantic_cls(input='这是一个非常好的产品')