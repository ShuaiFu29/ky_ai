import { createElement } from 'react'
import './App.css'

function App() {
  const element = <h1>Hello,world</h1>
  console.log(element)
  const element2 = createElement('h1', { className: 'title', }, 'Hello,word')
  console.log(element2, '-----')
  const todos1 = [{ id: 1, title: '标题1' }, { id: 2, title: '标题2' }, { id: 3, title: '标题3' }]
  const todos2 = [{ id: 1, title: '标题1' }, { id: 2, title: '标题2' }, { id: 3, title: '标题3' }]
  const element3 = createElement('ul', null, todos1.map((todo) => {
    return createElement('li', { key: todo.id }, todo.title)
  }))
  console.log(element3, '-----')
  return (
    <>
      {element}
      {element2}
      <ul>
        {
          todos1.map((todo) => (
            createElement('li', { key: todo.id }, todo.title)
          ))
        }
      </ul>
      {element3}

    </>
  )
}

export default App
