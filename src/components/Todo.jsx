import AddTaskForm from './AddTaskForm'
import InfoTodo from './InfoTodo'
import SearchTaskForm from './SearchTaskForm'
import TodoList from './TodoList'

const Todo = () => {
    return (
        <div className="todo">
        <h1 className="todo__title">To Do List</h1>
        <AddTaskForm />
        <SearchTaskForm />
        <InfoTodo />
        <TodoList />
        </div>
    )
}

export default Todo
