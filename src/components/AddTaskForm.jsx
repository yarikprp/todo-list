import Button from "./Button.jsx";
import Field from "./Field.jsx";

const AddTaskForm = (props) => {
    const { onAddTask } = props

    const onSubmit = (event) => {
        event.preventDefault()
        onAddTask()
    }

    return (
      <form className="todo__form" onSubmit={onSubmit}>
        <Field 
          className="todo__field"
          id="new-task"
          label="New task"
        />
        <Button type="submit">Add</Button>
      </form>
    )
}

export default AddTaskForm