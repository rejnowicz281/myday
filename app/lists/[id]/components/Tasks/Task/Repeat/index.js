"use client";

import { experimental_useOptimistic as useOptimistic } from "react";

export default function Repeat({ repeat, action, listId, taskId }) {
    const [optimisticRepeat, setOptimisticRepeat] = useOptimistic(repeat);

    function handleChange(e) {
        let amount = e.target.value;

        if (amount == "") return setOptimisticRepeat(0);

        // if amount has 0 at the beginning, remove it
        if (amount.toString().length > 1 && amount.toString()[0] == "0") amount = amount.substring(1);

        if (amount > -1) {
            setOptimisticRepeat(amount);
            action(amount, listId, taskId);
        }
    }

    return (
        <div>
            Repeating: every
            <input type="number" value={optimisticRepeat} onChange={handleChange} />
            day(s)
        </div>
    );
}
