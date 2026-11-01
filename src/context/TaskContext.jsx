import {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

export const TaskContext = createContext({})

export const TasksProvider = (props) => {
    const { children } = props

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

    const newTaskInputRef = useRef(null)
    const firstIncompleteTaskRef = useRef(null)
    const firstIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id


    const deleteAllTasks = useCallback(() => {
        const isConfirmed = confirm('Are you sure you want to delete all?');

        if (isConfirmed) {
            setTasks([]);
        } 
    }, []);


    const deleteTask = useCallback((taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }, [tasks])

    const toggleTaskCompletion = useCallback((taskId, isDone) => {
        setTasks(
            tasks.map((task) =>
            task.id === taskId ? { ...task, isDone } : task
            )
        )
    }, [tasks])

    const addTask = useCallback(() => {
        if(newTaskTitle.trim().length > 0) {
            const newTask = {
                id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
                title: newTaskTitle,
                isDone: false,
            }

            setTasks((prevTasks) => [...prevTasks, newTask])
            setNewTaskTitle('')
            setSearchQuery('')
            newTaskInputRef.current.focus()
        }
    }, [newTaskTitle])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    
    useEffect(() => {
        newTaskInputRef.current.focus()
    }, [])

    const filteredTasks = useMemo(() => {
       const clearSearchQuery = searchQuery.trim().toLowerCase()

       return clearSearchQuery.length > 0 
        ? tasks.filter(({title}) => title.toLowerCase().includes(clearSearchQuery)) 
        : null
    }, [searchQuery, tasks])
    
    return (
      <TaskContext.Provider
        value={{
            tasks,
            filteredTasks,
            firstIncompleteTaskRef,
            firstIncompleteTaskId,
            deleteTask,
            deleteAllTasks,
            toggleTaskCompletion,

            newTaskTitle,
            setNewTaskTitle,
            searchQuery,
            setSearchQuery,
            newTaskInputRef,
            addTask,
        }}
      >
        { children }
      </TaskContext.Provider>
    )
}