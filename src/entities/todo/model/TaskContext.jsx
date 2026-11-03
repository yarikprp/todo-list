import {
    createContext, useMemo
} from "react";
import useTasks from "@/entities/todo/model/useTasks.js";
import useCompleteTaskScroll from "@/entities/todo/model/useCompleteTaskScroll.js";

export const TaskContext = createContext({})

export const TasksProvider = (props) => {
    const { children } = props

    const {
        tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskCompletion,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disappearingTaskId,
        appearingTaskId,
    } = useTasks()

    const {
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    } = useCompleteTaskScroll(tasks)

    const value = useMemo(() => ({
        tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskCompletion,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disappearingTaskId,
        appearingTaskId,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,

    }), [
        tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskCompletion,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disappearingTaskId,
        appearingTaskId,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    ])

    return (
      <TaskContext.Provider
        value={value}
      >
        { children }
      </TaskContext.Provider>
    )
}