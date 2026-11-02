import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import useTaskLocalStorage from "./useTaskLocalStorage.js"

const useTasks = () => {
    const {
        savedTasks,
        saveTasks,
    } = useTaskLocalStorage()
    
    const [tasks, setTasks] = useState(savedTasks ?? [])

    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [searchQuery, setSearchQuery]= useState('')

    const newTaskInputRef = useRef(null)


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
        saveTasks(tasks)
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
    
    return {
        tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskCompletion,

        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
    }
}

export default useTasks