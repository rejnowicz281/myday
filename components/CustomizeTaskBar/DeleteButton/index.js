"use client";

import { deleteTask } from "@/actions/tasks";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";
import css from "./index.module.css";

export default function DeleteButton({ taskId }) {
    const { removeTask, setEditingTaskId } = useContext(TasksContext);

    function handleDelete() {
        setEditingTaskId(null);
        removeTask(taskId);
        deleteTask(taskId);
    }

    return (
        <button className={css.button} onClick={handleDelete}>
            Delete Task
        </button>
    );
}
