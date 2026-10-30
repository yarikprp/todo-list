import { useState } from 'react'
import AddTaskForm from './AddTaskForm'
import InfoTodo from './InfoTodo'
import SearchTaskForm from './SearchTaskForm'
import TodoList from './TodoList'

const Todo = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Learn React',
            isDone: false,
        },
        {
            id: 2,
            title: 'Build a React app',
            isDone: true,
        }
    ])

    return (
        <div className="todo">
        <h1 className="todo__title">To Do List</h1>
        <AddTaskForm />
        <SearchTaskForm />
        <InfoTodo 
            total={tasks.length} 
            done={tasks.filter((task) => task.isDone).length}
            onDeleteAll={() => setTasks([])}
        />
        <TodoList tasks={tasks} />
        </div>
    )
}

export default Todo
