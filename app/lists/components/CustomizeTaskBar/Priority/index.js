"use client";

import { updateTaskPriority } from "@/actions/tasks";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";
import css from "./index.module.css";

export default function Priority({ priority, taskId }) {
    const { setPriority } = useContext(TasksContext);

    async function handleChange(priority) {
        if (priority > -1) {
            setPriority(taskId, priority);
            updateTaskPriority(taskId, priority);
        }
    }

    return (
        <div>
            Priority: {priority}
            <button className={css.button} onClick={() => handleChange(priority + 1)}>
                +1
            </button>
            <button className={css.button} onClick={() => handleChange(priority - 1)}>
                -1
            </button>
        </div>
    );
}
