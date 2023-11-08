"use client";

import { updateTaskPriority } from "@/actions/tasks";
import TasksContext from "@/providers/TasksContext";
import { useContext, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import css from "./index.module.css";

export default function Priority({ priority, taskId }) {
    const { setPriority } = useContext(TasksContext);
    const [expanded, setExpanded] = useState(false);

    async function handleChange(priority) {
        if (priority > -1) {
            setPriority(taskId, priority);
            updateTaskPriority(taskId, priority);
        }
    }

    return (
        <div className={css.container}>
            <button className={css["expand-button"]} onClick={() => setExpanded(!expanded)}>
                {priority <= 0 ? "No" : priority} Priority
                {expanded ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            {expanded && (
                <div className={css.buttons}>
                    <button className={css.plus} onClick={() => handleChange(priority + 1)}>
                        +1
                    </button>
                    <button className={css.minus} onClick={() => handleChange(priority - 1)}>
                        -1
                    </button>
                </div>
            )}
        </div>
    );
}
