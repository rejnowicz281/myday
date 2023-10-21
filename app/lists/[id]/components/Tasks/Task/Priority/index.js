"use client";

import { useState } from "react";

export default function Priority({ priority, action, listId, taskId }) {
    const [optimisticPriority, setOptimisticPriority] = useState(priority);

    async function handleChange(priority) {
        if (priority > -1) {
            setOptimisticPriority(priority);
            await action(priority, listId, taskId);
        }
    }

    return (
        <div>
            Priority: {optimisticPriority}
            <button onClick={() => handleChange(optimisticPriority + 1)}>+1</button>
            <button onClick={() => handleChange(optimisticPriority - 1)}>-1</button>
        </div>
    );
}
