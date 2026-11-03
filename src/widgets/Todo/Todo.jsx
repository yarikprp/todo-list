import { useContext } from 'react'
import AddTaskForm from '@/features/add-task/AddTaskForm.jsx'
import InfoTodo from '@/features/stats/InfoTodo.jsx'
import SearchTaskForm from '@/features/search-task/SearchTaskForm.jsx'
import { TaskContext, TodoList } from '@/entities/todo/index.js'
import Button from '@/shared/ui/Button/index.js'
import styles from '@/widgets/Todo/Todo.module.scss'

const Todo = () => {
    const { firstIncompleteTaskRef } = useContext(TaskContext)

    return (
        <div className={styles.todo}>
        <h1 className={styles.title}>To Do List</h1>
        <AddTaskForm styles={styles} />
        <SearchTaskForm styles={styles} />
        <InfoTodo styles={styles} />
        <Button onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({ behavior: 'smooth' })}>
            Show first incomplete task
        </Button>
        <TodoList styles={styles} />
        </div>
    )
}

export default Todo
