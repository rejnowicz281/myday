"use client";

import { updateTaskDueDate } from "@/actions/tasks";
import TasksContext from "@/providers/TasksContext";
import { DateTime } from "luxon";
import { useContext, experimental_useOptimistic as useOptimistic } from "react";

export default function Options({ taskId, dueDate }) {
    const { setDueDate } = useContext(TasksContext);
    const [input, setInput] = useOptimistic(DateTime.fromJSDate(dueDate).toFormat("yyyy-MM-dd"));

    function handleSubmit(e) {
        e.preventDefault();
        const newDate = DateTime.fromISO(input).toJSDate();

        setDueDate(taskId, newDate);
        updateTaskDueDate(taskId, newDate);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="date" value={input} onChange={(e) => setInput(e.target.value)} />
            <button>Save</button>
        </form>
    );
}
