// import {
//   useEffect,
//   // useLayoutEffect,
//   useState,     // hook 函数式编程 好用的 以use 开头的函数  useState 响应式状态
// } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import { useTodos } from '@/hooks/useTodo'


const Todos = () => {
  // 单向数据流   数据流管理
  // 父组件持有管理数据  通过props 传递数据
  // 子组件通过props 自定义函数 通知父组件更新数据
  const { todos, addTodo, onToggle, onDelete } = useTodos()

  // useLayoutEffect(() => {
  //   const storedTodos = localStorage.getItem('todos')
  //   if (storedTodos) {
  //     setTodos(JSON.parse(storedTodos))
  //   }
  // }, [])
  // 新增todo 
  // const addTodo = (text) => {
  //   // setTodos
  //   // 数据状态是对象的时候
  //   setTodos([
  //     ...todos,
  //     {
  //       id: new Date().getTime(),
  //       text: text,
  //       isCompleted: false
  //     }
  //   ])
  // }
  // const onToggle = (id) => {
  //   // 响应式？ 返回一个全新的todos
  //   // state 是对象或数组的时候
  //   setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
  // }
  // const onDelete = (id) => {
  //   setTodos(todos.filter(todo => todo.id !== id))
  // }
  // useEffect(() => {
  //   // 介绍字符串
  //   localStorage.setItem('todos', JSON.stringify(todos))
  // }, [todos])
  return (
    <div className="app1">
      Todos
      {/* 自定义事件 */}
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </div>
  )

}

export default Todos