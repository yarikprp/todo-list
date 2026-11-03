import { useContext, useEffect, useState } from "react";
import Button from "@/shared/ui/Button/index.js";
import Field from "@/shared/ui/Field/index.js";
import { TaskContext } from "@/entities/todo/index.js";

const AddTaskForm = (props) => {
    const { styles } = props

    const [newTaskTitle, setNewTaskTitle] = useState('')

    const { 
      addTask,
      newTaskInputRef
    } = useContext(TaskContext)

    const [error, setError] = useState('')

    useEffect(() => {
        newTaskInputRef.current?.focus()
    }, [newTaskInputRef])

    const clearNewTaskTitle = newTaskTitle.trim()
    const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0

    const onSubmit = (event) => {
        event.preventDefault()

        if (!isNewTaskTitleEmpty) {
          addTask(
            clearNewTaskTitle,
            () => setNewTaskTitle('')
          )
        }
    }

    const onInput = (event) => {
        const { value } = event.target
        const clearValue = value.trim()
        const hasOnlySpaces = clearValue.length === 0 && value.length > 0

        setNewTaskTitle(value)
        setError(hasOnlySpaces ? 'Task title cannot contain only spaces' : '')}

    return (
      <form className={styles.form} onSubmit={onSubmit}>
        <Field 
          className={styles.field}
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