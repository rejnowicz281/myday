"use client";

import { updateTaskRepeat } from "@/actions/tasks";
import RepeatDisplay from "@/components/tasks/RepeatDisplay";
import TasksContext from "@/providers/TasksContext";
import { useContext, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import ManualUpdate from "./ManualUpdate";
import css from "./index.module.css";

export default function Repeat({ repeat, taskId }) {
    const { setRepeat } = useContext(TasksContext);
    const [expanded, setExpanded] = useState(false);

    function handleUpdate(value) {
        if (value > -1 && value != repeat) {
            setRepeat(taskId, value);
            updateTaskRepeat(taskId, value);
        }
    }

    return (
        <div className={css.container}>
            <button className={css["expand-button"]} onClick={() => setExpanded(!expanded)}>
                <RepeatDisplay repeat={repeat} />
                {expanded ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            {expanded && (
                <>
                    <button className={css.button} onClick={() => handleUpdate(0)}>
                        No Repeat
                    </button>
                    <button className={css.button} onClick={() => handleUpdate(1)}>
                        Daily
                    </button>
                    <button className={css.button} onClick={() => handleUpdate(7)}>
                        Weekly
                    </button>
                    <button className={css.button} onClick={() => handleUpdate(30)}>
                        Monthly
                    </button>
                    <button className={css.button} onClick={() => handleUpdate(365)}>
                        Yearly
                    </button>
                    <ManualUpdate repeat={repeat} taskId={taskId} />
                </>
            )}
        </div>
    );
}
