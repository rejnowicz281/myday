"use client";

import { updateTaskDueDate } from "@/actions/tasks";
import DueDateDisplay from "@/components/tasks/DueDateDisplay";
import TasksContext from "@/providers/TasksContext";
import { DateTime } from "luxon";
import { useContext } from "react";
import Options from "./Options";
import css from "./index.module.css";

export default function DueDate({ dueDate, taskId }) {
    const { setDueDate } = useContext(TasksContext);

    function today() {
        const today = DateTime.now().toJSDate();

        setDueDate(taskId, today);
        updateTaskDueDate(taskId, today);
    }

    function tomorrow() {
        const tomorrow = DateTime.now().plus({ days: 1 }).toJSDate();

        setDueDate(taskId, tomorrow);
        updateTaskDueDate(taskId, tomorrow);
    }

    function none() {
        setDueDate(taskId, null);
        updateTaskDueDate(taskId, null);
    }

    return (
        <div>
            <DueDateDisplay dueDate={dueDate} />
            <button className={css.button} onClick={none}>
                None
            </button>
            <button className={css.button} onClick={today}>
                Today
            </button>
            <button className={css.button} onClick={tomorrow}>
                Tomorrow
            </button>
            <Options taskId={taskId} dueDate={dueDate} />
        </div>
    );
}
