# 全栈开发

- 前端 react
- mock 前端伪接口
  - /api axios
- 后端 java,node,go

## vite-plugin-mock
    - mock
    前端在后端给出真实接口前，需要mock一下，前端自己连接接口
    - vite-plugin-mock  插件
    - mock 服务启动
    - /mock/test.js  根目录
        export default [
          {
            url: '/api/todos',
            method: 'get',
            response: () => {
              return {
                code: 0,
                message: 'success',
                data: todos
              }
            }
          }
        }
      ]
- 前后端联调
    - 开会立项
    - 前后端  接口文档
      /api/todos
      [
        {
          id:'',
          title:'',
          completed:true|false
        }
      ]
