"use client";

import { DateTime } from "luxon";
import { experimental_useOptimistic as useOptimistic } from "react";

export default function Options({ listId, taskId, action, dueDate, setDueDate }) {
    const [input, setInput] = useOptimistic(DateTime.fromJSDate(dueDate).toFormat("yyyy-MM-dd"));

    function handleSubmit(e) {
        e.preventDefault();
        const newDate = DateTime.fromISO(input).toJSDate();
        setDueDate(newDate);

        action(newDate, listId, taskId);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="date" value={input} onChange={(e) => setInput(e.target.value)} />
            <button>Save</button>
        </form>
    );
}
