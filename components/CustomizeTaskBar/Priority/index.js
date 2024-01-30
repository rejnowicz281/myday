"use client";

import { updateTaskPriority } from "@/actions/tasks";
import TasksContext from "@/providers/TasksContext";
import { useContext, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

export default function Priority({ priority, taskId }) {
    const { setPriority } = useContext(TasksContext);
    const [expanded, setExpanded] = useState(false);

    async function handleChange(priority) {
        if (priority > -1) {
            setPriority(taskId, priority);
            updateTaskPriority(taskId, priority);
        }
    }

    return (
        <div className="flex flex-col">
            <button
                className="hover:text-gray-500 font-bold flex items-center justify-center"
                onClick={() => setExpanded(!expanded)}
            >
                {priority <= 0 ? "No" : priority} Priority
                {expanded ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            {expanded && (
                <div className="flex gap-4">
                    <button className="flex-1 text-end hover:text-gray-500" onClick={() => handleChange(priority + 1)}>
                        +1
                    </button>
                    <button
                        className="flex-1 text-start hover:text-gray-500"
                        onClick={() => handleChange(priority - 1)}
                    >
                        -1
                    </button>
                </div>
            )}
        </div>
    );
}
