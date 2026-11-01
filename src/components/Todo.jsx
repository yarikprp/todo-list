import { useContext } from 'react'
import AddTaskForm from './AddTaskForm'
import InfoTodo from './InfoTodo'
import SearchTaskForm from './SearchTaskForm'
import TodoList from './TodoList'
import Button from './Button'
import { TaskContext } from '../context/TaskContext'

const Todo = () => {
    const { firstIncompleteTaskRef } = useContext(TaskContext)

    return (
        <div className="todo">
        <h1 className="todo__title">To Do List</h1>
        <AddTaskForm />
        <SearchTaskForm />
        <InfoTodo />
        <Button onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({ behavior: 'smooth' })}>
            Show first incomplete task
        </Button>
        <TodoList />
        </div>
    )
}

export default Todo
