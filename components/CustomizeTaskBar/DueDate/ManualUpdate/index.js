"use client";

import { updateTaskDueDate } from "@/actions/tasks";
import TasksContext from "@/providers/TasksContext";
import { DateTime } from "luxon";
import { useContext, experimental_useOptimistic as useOptimistic } from "react";

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
        <form className="p-1 flex flex-col gap-1 items-center" onSubmit={handleSubmit}>
            <input
                className="hover:text-gray-500"
                type="date"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="w-full font-bold hover:text-gray-500">Save Due Date</button>
        </form>
    );
}
