"use client";

import { updateTaskDueDate } from "@actions/tasks";
import TasksContext from "@app/lists/providers/TasksContext";
import { DateTime } from "luxon";
import { useContext } from "react";
import Display from "./Display";
import Options from "./Options";

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

    return (
        <div>
            <Display dueDate={dueDate} />
            <button onClick={today}>Today</button>
            <button onClick={tomorrow}>Tomorrow</button>
            <Options taskId={taskId} dueDate={dueDate} />
        </div>
    );
}
