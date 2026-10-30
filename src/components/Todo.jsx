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

    const deleteAllTasks = () => {
       console.log('Delete all tasks')
    }

    const deleteTask = (taskId) => {
        console.log(`Delete task with id: ${taskId}`)
    }

    const toggleTaskCompletion = (taskId, isDone) => {
        console.log(`Toggle completion for task with id: ${taskId} ${isDone ? 'done' : 'not done'}`)
    }

    const filterTasks = (query) => {
        console.log(`Filter tasks with query: ${query}`)
    }

    const addTask = () => {
        console.log(`Add task with`)
    }

    return (
        <div className="todo">
        <h1 className="todo__title">To Do List</h1>
        <AddTaskForm onAddTask={addTask} />
        <SearchTaskForm onSearchInput={filterTasks} />
        <InfoTodo 
            total={tasks.length} 
            done={tasks.filter((task) => task.isDone).length}
            onDeleteButtonClick={deleteAllTasks}
        />
        <TodoList
            tasks={tasks} 
            onDeleteButtonClick={deleteTask}   
            toggleTaskChange={toggleTaskCompletion}
         />
        </div>
    )
}

export default Todo
