"use client";

import { updateTaskDueDate } from "@/actions/tasks";
import TasksContext from "@/providers/TasksContext";
import { DateTime } from "luxon";
import { useContext, experimental_useOptimistic as useOptimistic } from "react";
import css from "./index.module.css";

export default function ManualUpdate({ taskId, dueDate }) {
    const { setDueDate } = useContext(TasksContext);
    const [input, setInput] = useOptimistic(DateTime.fromJSDate(dueDate).toFormat("yyyy-MM-dd"));

    function handleSubmit(e) {
        e.preventDefault();
        let newDate = DateTime.fromISO(input);
        const taskDate = DateTime.fromJSDate(dueDate);

        if (taskDate.toFormat("yyyy-MM-dd") != newDate.toFormat("yyyy-MM-dd")) {
            newDate = newDate.toJSDate();
            setDueDate(taskId, newDate);
            updateTaskDueDate(taskId, newDate);
        }
    }

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input className={css.input} type="date" value={input} onChange={(e) => setInput(e.target.value)} />
            <button className={css.button}>Save</button>
        </form>
    );
}
