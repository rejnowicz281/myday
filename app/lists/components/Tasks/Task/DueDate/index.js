"use client";

import { DateTime } from "luxon";
import { experimental_useOptimistic as useOptimistic } from "react";
import Display from "./Display";
import Options from "./Options";

export default function DueDate({ dueDate, action, taskId }) {
    const [optimisticDueDate, setOptimisticDueDate] = useOptimistic(dueDate);

    function today() {
        const today = DateTime.now().toJSDate();
        setOptimisticDueDate(today);

        action(today, taskId);
    }

    function tomorrow() {
        const tomorrow = DateTime.now().plus({ days: 1 }).toJSDate();
        setOptimisticDueDate(tomorrow);

        action(tomorrow, taskId);
    }

    return (
        <div>
            <Display dueDate={optimisticDueDate} />
            <button onClick={today}>Today</button>
            <button onClick={tomorrow}>Tomorrow</button>
            <Options action={action} taskId={taskId} dueDate={optimisticDueDate} setDueDate={setOptimisticDueDate} />
        </div>
    );
}
