"use client";

import { updateTaskRepeat } from "@actions/tasks";
import TasksContext from "@providers/TasksContext";
import { useContext } from "react";
import Display from "./Display";
import Options from "./Options";

export default function Repeat({ repeat, taskId }) {
    const { setRepeat } = useContext(TasksContext);

    function handleChange(amount) {
        if (amount > -1 && amount != repeat) {
            setRepeat(taskId, amount);
            updateTaskRepeat(taskId, amount);
        }
    }

    return (
        <div>
            <Display repeat={repeat} />
            <button onClick={() => handleChange(0)}>No Repeat</button>
            <button onClick={() => handleChange(1)}>Daily</button>
            <button onClick={() => handleChange(7)}>Weekly</button>
            <button onClick={() => handleChange(30)}>Monthly</button>
            <button onClick={() => handleChange(365)}>Yearly</button>
            <Options taskId={taskId} repeat={repeat} />
        </div>
    );
}
