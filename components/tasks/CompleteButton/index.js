"use client";

import { updateTaskCompleted } from "@/actions/tasks";
import TasksContext from "@/providers/TasksContext";
import { useContext, useRef } from "react";

export default function CompleteButton({ className, taskId, completed }) {
    const { setCompleted } = useContext(TasksContext);
    const submitRef = useRef(null);

    function handleAction() {
        setCompleted(taskId, !completed);
        updateTaskCompleted(taskId, !completed);
    }

    return (
        <form action={handleAction}>
            <input
                className={className}
                type="checkbox"
                onChange={() => {
                    submitRef.current.click();
                }}
                checked={completed}
            />
            <button className="hidden" ref={submitRef}></button>
        </form>
    );
}
