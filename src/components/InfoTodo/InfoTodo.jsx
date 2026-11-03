import { memo, useContext, useMemo } from "react"
import { TaskContext } from "../../context/TaskContext"

const InfoTodo = (props) => {
    const { styles } = props

    const { 
      tasks,
      deleteAllTasks
    } = useContext(TaskContext)

    const total = tasks.length
    const hasTasks = total > 0
        const done = useMemo(() => {
        return tasks.filter((task) => task.isDone).length
    }, [tasks])


    return (
      <div className={styles.info}>
        <div className={styles.totalTasks}>
          Done: {done} / Total: {total}
        </div>
        {hasTasks && (
          <button
            className={styles.deleteAllButton}
            type="button"
            onClick={deleteAllTasks}
          >
            Delete all
          </button>
        )}
      </div>
    )
}

export default memo(InfoTodo)