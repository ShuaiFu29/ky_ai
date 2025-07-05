# HTML5 王者对象Blob

- 图片转成base64 编码
- atob(base64) 二进制的字符串编码
- for 每一个字符
  charCodeAt() 0-255 8 byte的整数
  Unit8Array()
- 二进制文件对象描述new Blob([unit8Array],类型)
- 二进制层面上去压缩、切割、修改
- 浏览器将会为二进制对象提供一个临时的URL地址
- URL.creatObjectURL(blob)