"use client";

import { updateTaskPriority } from "@/actions/tasks";
import TasksContext from "@/providers/TasksContext";
import { useContext, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

export default function Priority({ priority, taskId }) {
    const { setPriority } = useContext(TasksContext);
    const [expanded, setExpanded] = useState(false);

    async function handleAction(formData) {
        const priority = formData.get("priority");

        if (priority > -1) {
            const taskId = formData.get("taskId");

            setPriority(taskId, priority);

            updateTaskPriority(formData);
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
                    <form action={handleAction} className="flex-1 flex">
                        <input type="hidden" name="taskId" value={taskId} />
                        <input type="hidden" name="priority" value={parseInt(priority) + 1} />
                        <button className="flex-1 text-end hover:text-gray-500">+1</button>
                    </form>

                    <form action={handleAction} className="flex-1 flex">
                        <input type="hidden" name="taskId" value={taskId} />
                        <input type="hidden" name="priority" value={parseInt(priority) - 1} />
                        <button className="flex-1 text-start hover:text-gray-500">-1</button>
                    </form>
                </div>
            )}
        </div>
    );
}
