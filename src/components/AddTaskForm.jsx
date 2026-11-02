import { useContext, useState } from "react";
import Button from "./Button.jsx";
import Field from "./Field.jsx";
import { TaskContext } from "../context/TaskContext.jsx";

const AddTaskForm = () => {
    const { 
      addTask,
      newTaskTitle, 
      setNewTaskTitle,
      newTaskInputRef
    } = useContext(TaskContext)

    const [error, setError] = useState('')

    const clearNewTaskTitle = newTaskTitle.trim()
    const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0

    const onSubmit = (event) => {
        event.preventDefault()

        if (!isNewTaskTitleEmpty) {
          addTask(clearNewTaskTitle)
        }
    }

    const onInput = (event) => {
        const { value } = event.target
        const clearValue = value.trim()
        const hasOnlySpaces = clearValue.length === 0 && value.length > 0

        setNewTaskTitle(value)
        setError(hasOnlySpaces ? 'Task title cannot contain only spaces' : '')}

    return (
      <form className="todo__form" onSubmit={onSubmit}>
        <Field 
          className="todo__field"
          id="new-task"
          label="New task"
          value={newTaskTitle}
          error={error}
          onInput={onInput}
          ref={newTaskInputRef}
        />
        <Button
          type="submit"
          isDisabled={isNewTaskTitleEmpty}
        >
          Add
        </Button>
      </form>
    )
}

export default AddTaskForm