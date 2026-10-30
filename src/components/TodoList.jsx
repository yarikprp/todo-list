import TodoItem from './TodoItem'

const TodoList = (props) => {
    const { tasks = [] } = props

    const hasTasks = tasks.length > 0

    if (!hasTasks) {
        return <div className="todo__empty-message">No tasks to display.</div>
    }


    return (
      <ul className="todo__list">
        {tasks.map((task) => (
          <TodoItem
            className="todo__item"
            key={task.id}
            {...task}
          />
        ))}
      </ul>

    )
}

export default TodoList