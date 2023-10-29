"use client";

import { deleteTask } from "@/actions/tasks";
import CustomizeContext from "@/providers/CustomizeContext";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";
import css from "./index.module.css";

export default function DeleteButton({ taskId }) {
    const { setEditingTaskId } = useContext(CustomizeContext);
    const { removeTask } = useContext(TasksContext);

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
