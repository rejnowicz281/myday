"use client";

import { updateTaskPriority } from "@/actions/tasks";
import { Button } from "@/components/ui/button";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";

export default function Priority({ priority, taskId }) {
    const { setPriority } = useContext(TasksContext);

    async function handleAction(formData) {
        const priority = formData.get("priority");

        if (priority > -1) {
            const taskId = formData.get("taskId");

            setPriority(taskId, priority);

            updateTaskPriority(formData);
        }
    }

    return (
        <>
            <div className="flex">
                <form action={handleAction} className="flex-1 flex">
                    <input type="hidden" name="taskId" value={taskId} />
                    <input type="hidden" name="priority" value={parseInt(priority) + 1} />
                    <Button className="flex justify-end flex-1" variant="ghost">
                        +1
                    </Button>
                </form>

                <form action={handleAction} className="flex-1 flex">
                    <input type="hidden" name="taskId" value={taskId} />
                    <input type="hidden" name="priority" value={parseInt(priority) - 1} />
                    <Button className="flex justify-start flex-1" variant="ghost">
                        -1
                    </Button>
                </form>
            </div>
        </>
    );
}
