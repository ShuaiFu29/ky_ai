// 内置的hook 函数 
import { useState } from 'react'
import '../Todo.css'
import TodoForm from './TodoForm'
import Todos from './Todos'
function TodoList() {
    // 数据驱动的界面
    // 静态页面
    // DOM 数组 -> map -> join('') -> innerHTML 底层 API 编程 
    // 面向业务
    // 缺点：低效率 面向API
    // 面向业务 懂业务 
    // 数据  -> 变化 -> 数据状态 -> 自动刷新页面 -> **数据****驱动**页面(MVVM)
    // 数组， 第一项数据变量，第二项是一个函数 执行 并传入新的todos 的值 页面会自动更新
    // 挂载点 tbody
    // { todos.map  }
    // setTodos  DOM 及动态更新
    // 响应式界面开发
    // hello 数据状态  setHello 修改数据状态的方法 es6 解构
    // const hello=useState('hello')[0] const setHello=useState('hello')[1]
    const [hello, setHello] = useState('hello')
    const [title, setTitle] = useState('Todo List')
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '吃饭',
            completed: false
        }
    ])
    const handleAdd = (text) => {
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                text: text,
                completed: false
            }
        ])
    }
    return (
        <div className='container'>
            <h1 className='title'>{title}</h1>
            <h2>{hello}</h2>
            <TodoForm onAdd={handleAdd} />
            <Todos todos={todos} />
            {/* {
                // 当下这个位置
                // 数据为王  界面是被驱动的
                // 数据驱动
                // 数据绑定
                // 发送改变后，自动的改变
                todos.map(todo => (
                    <li>{todo.text}</li>
                ))
            } */}
        </div>
    )
}
export default TodoList