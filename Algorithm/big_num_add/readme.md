# 大数相加
- 高精度
  JS Number类型 不分整数、浮点数、高精度...
  JS 不太适合计算 python 适合
  表现力强
- 大数字
  边界问题 数值过大无法计算
  Infinity -Infinity
- 字符串化
  把两个数字转为字符串
  
- es6 提供了BigInt 大数类型
## BigInt
安全 2^53-1 9007199254740991
es6 新增的第六种简单数据类型
后面加 n 的表达，申明了bigint 类型
大数不能之间和普通数字运算
BigInt('') 
BigInt 不能使用new关键字，它是一个简单数据类型
无限大 无溢出问题
不能混合Number 和 BigInt 运算
让JS 适合大型项目开发 make JS great again 