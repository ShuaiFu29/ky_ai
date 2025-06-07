import { useState } from "react"
function TodoForm(props) {
    const onAdd = props.onAdd
    const [text, setText] = useState('打豆豆')
    const handleSubmit = (e) => {
        // 阻止默认提交行为
        // 由js 来控制
        e.preventDefault()  // event API
        // 提交数据
        // 通知父组件更新状态
        onAdd(text)
        setText('')
    }
    const handleChange = (e) => {
        setText(e.target.value)
        console.log(text)
    }
    return (
        <form action='http://www.baidu.com' onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="请输入待办事项"
                value={text}
                onChange={handleChange}
            />
            <button type="submit">添加</button>
        </form>
    )
}
export default TodoForm