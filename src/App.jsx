import Todo from "./components/Todo.jsx"
import { TasksProvider } from "./context/TaskContext.jsx"

const App = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
}

export default App
