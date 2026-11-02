import { useRef } from "react";

const useCompleteTaskScroll = (tasks) => {
    const firstIncompleteTaskRef = useRef(null);
    const firstIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id;
    return {
        firstIncompleteTaskRef,
        firstIncompleteTaskId
    };
};

export default useCompleteTaskScroll;
