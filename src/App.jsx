import Router from "./Router.jsx";
import TasksPage from "./pages/TasksPage.jsx";
import TaskPage from "./pages/TaskPage.jsx";
import { TasksProvider } from "./context/TaskContext.jsx";


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
