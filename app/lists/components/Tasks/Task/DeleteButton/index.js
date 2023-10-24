"use client";

import { deleteTask } from "@actions/tasks";
import TasksContext from "@app/lists/providers/TasksContext";
import { useContext } from "react";

export default function DeleteButton({ taskId }) {
    const { removeTask } = useContext(TasksContext);

    function handleDelete() {
        removeTask(taskId);
        deleteTask(taskId);
    }

    return <button onClick={handleDelete}>Delete Task</button>;
}
