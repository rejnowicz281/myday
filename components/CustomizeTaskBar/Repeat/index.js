"use client";

import { updateTaskRepeat } from "@/actions/tasks";
import RepeatDisplay from "@/components/tasks/RepeatDisplay";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";
import Options from "./Options";
import css from "./index.module.css";

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
            <RepeatDisplay repeat={repeat} />
            <button className={css.button} onClick={() => handleChange(0)}>
                No Repeat
            </button>
            <button className={css.button} onClick={() => handleChange(1)}>
                Daily
            </button>
            <button className={css.button} onClick={() => handleChange(7)}>
                Weekly
            </button>
            <button className={css.button} onClick={() => handleChange(30)}>
                Monthly
            </button>
            <button className={css.button} onClick={() => handleChange(365)}>
                Yearly
            </button>
            <Options taskId={taskId} repeat={repeat} />
        </div>
    );
}
