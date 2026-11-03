import Router from "@/app/routing/Router.jsx";
import TasksPage from "@/pages/TasksPage/index.js";
import TaskPage from "@/pages/TaskPage/index.js";
import { TasksProvider } from "@/entities/todo/index.js";
import '@/app/styles/index.js'

const App = () => {
  const routes = {
    '/': TasksPage,
    '/tasks/:id': TaskPage,
    '*': () => <h1>404 Not Found</h1>
  }

  return (
    <TasksProvider>
      <Router routes={routes} />
    </TasksProvider>
  )
}

export default App
