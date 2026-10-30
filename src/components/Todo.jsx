import { useState, useEffect } from 'react'
import AddTaskForm from './AddTaskForm'
import InfoTodo from './InfoTodo'
import SearchTaskForm from './SearchTaskForm'
import TodoList from './TodoList'

const Todo = () => {
    const [tasks, setTasks] = useState(() => {
       const saveTasks = localStorage.getItem('tasks')

        if(saveTasks) {
            return JSON.parse(saveTasks)
        }

        return [
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

        ]
    })

    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [searchQuery, setSearchQuery]= useState('')

    const deleteAllTasks = () => {
       const isConfirmed = confirm('Are you sure you want to delete all?')

       if(isConfirmed) {
        setTasks([])
       }

    }

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }

    const toggleTaskCompletion = (taskId, isDone) => {
        setTasks(
            tasks.map((task) =>
            task.id === taskId ? { ...task, isDone } : task
            )
        )
    }

    const addTask = () => {
        if(newTaskTitle.trim().length > 0) {
            const newTask = {
                id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
                title: newTaskTitle,
                isDone: false,
            }

            setTasks([...tasks, newTask])
            setNewTaskTitle('')
            setSearchQuery('')
        }
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const clearSearchQuery = searchQuery.trim().toLowerCase()
    const filteredTasks = clearSearchQuery.length > 0 
        ? tasks.filter(({title}) => title.toLowerCase().includes(clearSearchQuery)) 
        : null

    return (
        <div className="todo">
        <h1 className="todo__title">To Do List</h1>
        <AddTaskForm 
            onAddTask={addTask}
            newTaskTitle={newTaskTitle}
            setTaskTitle={setNewTaskTitle}
        />
        <SearchTaskForm 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
        />
        <InfoTodo 
            total={tasks.length} 
            done={tasks.filter((task) => task.isDone).length}
            onDeleteButtonClick={deleteAllTasks}
        />
        <TodoList
            tasks={tasks} 
            filteredTasks={filteredTasks}
            onDeleteButtonClick={deleteTask}   
            toggleTaskChange={toggleTaskCompletion}
         />
        </div>
    )
}

export default Todo
