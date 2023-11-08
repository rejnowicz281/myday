"use client";

import { updateTaskCompleted } from "@/actions/tasks";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";

export default function CompleteButton({ className, taskId, completed }) {
    const { setCompleted } = useContext(TasksContext);

    function handleAction(e) {
        e.stopPropagation();
        setCompleted(taskId, !completed);
        updateTaskCompleted(taskId, !completed);
    }

    return <input className={className} type="checkbox" onChange={handleAction} checked={completed} />;
}
