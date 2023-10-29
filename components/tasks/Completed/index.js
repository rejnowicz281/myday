"use client";

import { updateTaskCompleted } from "@/actions/tasks";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";
import css from "./index.module.css";

export default function Completed({ taskId, completed }) {
    const { setCompleted } = useContext(TasksContext);

    function handleAction(e) {
        e.stopPropagation();
        setCompleted(taskId, !completed);
        updateTaskCompleted(taskId, !completed);
    }

    return (
        <div>
            Completed:
            <button className={css.button} onClick={handleAction}>
                {completed.toString()}
            </button>
        </div>
    );
}
