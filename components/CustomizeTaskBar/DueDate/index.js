"use client";

import { updateTaskDueDate } from "@/actions/tasks";
import DueDateDisplay from "@/components/tasks/DueDateDisplay";
import TasksContext from "@/providers/TasksContext";
import { DateTime } from "luxon";
import { useContext, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import ManualUpdate from "./ManualUpdate";
import css from "./index.module.css";

export default function DueDate({ dueDate, taskId }) {
    const [expanded, setExpanded] = useState(false);
    const { setDueDate } = useContext(TasksContext);

    function today() {
        let today = DateTime.now();
        const taskDate = DateTime.fromJSDate(dueDate);

        if (taskDate.toFormat("yyyy-MM-dd") != today.toFormat("yyyy-MM-dd")) {
            today = today.toJSDate();
            setDueDate(taskId, today);
            updateTaskDueDate(taskId, today);
        }
    }

    function tomorrow() {
        let tomorrow = DateTime.now().plus({ days: 1 });
        const taskDate = DateTime.fromJSDate(dueDate);

        if (taskDate.toFormat("yyyy-MM-dd") != tomorrow.toFormat("yyyy-MM-dd")) {
            tomorrow = tomorrow.toJSDate();
            setDueDate(taskId, tomorrow);
            updateTaskDueDate(taskId, tomorrow);
        }
    }

    function none() {
        if (dueDate != null) {
            setDueDate(taskId, null);
            updateTaskDueDate(taskId, null);
        }
    }

    return (
        <div className={css.container}>
            <button className={css["expand-button"]} onClick={() => setExpanded(!expanded)}>
                <DueDateDisplay dueDate={dueDate} />
                {expanded ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            {expanded && (
                <>
                    <button className={css.button} onClick={none}>
                        None
                    </button>
                    <button className={css.button} onClick={today}>
                        Today
                    </button>
                    <button className={css.button} onClick={tomorrow}>
                        Tomorrow
                    </button>
                    <ManualUpdate taskId={taskId} dueDate={dueDate} />
                </>
            )}
        </div>
    );
}
