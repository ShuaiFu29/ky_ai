// 列表的渲染
function Todos(props) {
    console.log(props)
    // 父组件传过来的数据状态呢？传参
    const todos = props.todos
    return (
        <ul>
            {
                todos.map(todo => (
                    <li>{todo.text}</li>
                ))
            }
        </ul>
    )
}
export default Todos