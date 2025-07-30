

import './App.css'
// react + typescript
// javascript 可能会有些问题  主要弱类型
// jsx 后缀改成 tsx


function App() {
  // 编译阶段
  // 多写了类型申明文件
  // 多写一些代码 类型申明 代码质量保驾护航
  // let count = 10
  // count = 20
  // const title: string = 'hello ts'
  // const isDone: boolean = true
  // const list: (number | string)[] = [1, '2', 3]
  // const tuple: [string, number] = ['hello', 10]
  // interface User {
  //   name: string
  //   age: number
  // }
  // const obj: User = {
  //   name: '张三',
  //   age: 18
  // }
  interface Props {
    name: string
  }
  // typescript 类型约束  重要的地方一定要类型约束
  // 参数 返回值
  // 泛型  泛指内部的类型
  const HelloComponent: React.FC<Props> = (props) => {
    return <div>Hello {props.name}</div>
  }


  return (
    <>
      <HelloComponent name='张三' />
    </>
  )
}

export default App
