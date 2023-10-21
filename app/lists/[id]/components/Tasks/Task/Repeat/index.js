"use client";

import { useState } from "react";
import Display from "./Display";
import Options from "./Options";

export default function Repeat({ repeat, action, listId, taskId }) {
    const [optimisticRepeat, setOptimisticRepeat] = useState(repeat);

    function handleChange(amount) {
        if (amount > -1 && amount != optimisticRepeat) {
            setOptimisticRepeat(amount);
            action(amount, listId, taskId);
        }
    }

    return (
        <div>
            <Display repeat={optimisticRepeat} />
            <button onClick={() => handleChange(0)}>No Repeat</button>
            <button onClick={() => handleChange(1)}>Daily</button>
            <button onClick={() => handleChange(7)}>Weekly</button>
            <button onClick={() => handleChange(30)}>Monthly</button>
            <button onClick={() => handleChange(365)}>Yearly</button>
            <Options
                action={action}
                listId={listId}
                taskId={taskId}
                repeat={optimisticRepeat}
                setRepeat={setOptimisticRepeat}
            />
        </div>
    );
}
