const InfoTodo = (props) => {
    const { total, done, onDeleteAll } = props

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
            onClick={onDeleteAll}
          >
            Delete all
          </button>
        )}
      </div>
    )
}

export default InfoTodo