import './App.css'
import {
  useState,
  Fragment    // 文档碎片组件
} from 'react'


// function Demo() {
//   return (
//     // DOM 树多；1一层不需要的节点  DOM解析性能下降
//     <Fragment>
//       <h1>Hello</h1>
//       <p>你好</p>
//     </Fragment>
//   )
// }


function Demo({ item }) {
  return item.map((item) =>
    <Fragment key={item.id}>
      <h1>{item.name}</h1>
      <p>{item.age}</p>
    </Fragment>
  )
}


function App() {
  const item = [
    {
      id: 1,
      name: '张三',
      age: 18
    },
    {
      id: 2,
      name: '李四',
      age: 20
    },
    {
      id: 3,
      name: '王五',
      age: 22
    }
  ]

  return (
    <>
      <Demo item={item} />
    </>
  )
}

export default App
