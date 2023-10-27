"use client";

import { deleteTask } from "@/actions/tasks";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";

export default function DeleteButton({ taskId }) {
    const { removeTask, setEditingTaskId } = useContext(TasksContext);

    function handleDelete() {
        setEditingTaskId(null);
        removeTask(taskId);
        deleteTask(taskId);
    }

    return <button onClick={handleDelete}>Delete Task</button>;
}
