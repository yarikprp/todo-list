import {
    createContext,
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

        newTaskTitle,
        setNewTaskTitle,
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
            disappearingTaskId,
            appearingTaskId,
        }}
      >
        { children }
      </TaskContext.Provider>
    )
}