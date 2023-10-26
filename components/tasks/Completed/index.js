"use client";

import { updateTaskCompleted } from "@actions/tasks";
import TasksContext from "@providers/TasksContext";
import { useContext } from "react";

export default function Completed({ taskId, completed }) {
    const { setCompleted } = useContext(TasksContext);

    function handleAction() {
        setCompleted(taskId, !completed);
        updateTaskCompleted(taskId, !completed);
    }

    return (
        <div>
            Completed:
            <button onClick={handleAction}>{completed.toString()}</button>
        </div>
    );
}
