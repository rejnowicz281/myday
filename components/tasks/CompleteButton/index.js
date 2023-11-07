"use client";

import { updateTaskCompleted } from "@/actions/tasks";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";
import css from "./index.module.css";

export default function CompleteButton({ taskId, completed }) {
    const { setCompleted } = useContext(TasksContext);

    function handleAction(e) {
        e.stopPropagation();
        setCompleted(taskId, !completed);
        updateTaskCompleted(taskId, !completed);
    }

    return <input type="checkbox" className={css.checkbox} onClick={handleAction} checked={completed} />;
}
