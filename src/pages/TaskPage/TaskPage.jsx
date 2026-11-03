import { useState, useEffect } from 'react';
import tasksAPI from "@/shared/api/tasks/index.js";

const TaskPage = (props) => {
    const { params } = props
    const { id: taskId } = params

    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setLoading(true)
        tasksAPI.getById(taskId).then((data) => {
            setTask(data);
            setHasError(false);
        }).catch(() => {
            setHasError(true);
        }).finally(() => {
            setLoading(false);
        });
    }, [taskId])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (hasError) {
        return <div>Error occurred while fetching the task.</div>;
    }

    return (
        <div>
            <h1>{task?.title}</h1>
            <p>{task?.isDone ? "Status: Completed" : "Status: Incomplete"}</p>
        </div>
    )
}

export default TaskPage