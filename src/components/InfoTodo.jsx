import { memo } from "react"

const InfoTodo = (props) => {
    const { 
      total, 
      done,
      onDeleteButtonClick 
    } = props

    const hasTasks = total > 0

    return (
      <div className="todo__info">
        <div className="todo__total-tasks">
          Done: {done} / Total: {total}
        </div>
        {hasTasks && (
          <button
            className="todo__delete-all-button"
            type="button"
            onClick={onDeleteButtonClick}
          >
            Delete all
          </button>
        )}
      </div>
    )
}

export default memo(InfoTodo)