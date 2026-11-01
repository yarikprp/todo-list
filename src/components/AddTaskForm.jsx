import { useContext } from "react";
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

    const onSubmit = (event) => {
        event.preventDefault()
        addTask()
    }

    return (
      <form className="todo__form" onSubmit={onSubmit}>
        <Field 
          className="todo__field"
          id="new-task"
          label="New task"
          value={newTaskTitle}
          onInput={(event) => setNewTaskTitle(event.target.value)}
          ref={newTaskInputRef}
        />
        <Button type="submit">Add</Button>
      </form>
    )
}

export default AddTaskForm