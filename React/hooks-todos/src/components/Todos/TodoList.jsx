import TodoItem from "./TodoItem"

const TodoList = (props) => {
  const {
    todos,
    onToggle,
    onDelete
  } = props
  return (
    <ul className="todo-list">
      {
        todos.length > 0 ? (
          todos.map(todo => <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => onToggle(todo.id)}
            onDelete={() => onDelete(todo.id)}
          />)
        ) : <p>No todos</p>
      }
    </ul>
  )

}
export default TodoList