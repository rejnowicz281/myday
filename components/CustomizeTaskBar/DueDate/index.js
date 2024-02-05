"use client";

import { updateTaskDueDate } from "@/actions/tasks";
import { Button } from "@/components/ui/button";
import TasksContext from "@/providers/TasksContext";
import { DateTime } from "luxon";
import { useContext, useTransition } from "react";
import ManualUpdate from "./ManualUpdate";

export default function DueDate({ dueDate, taskId }) {
    const { setDueDate } = useContext(TasksContext);
    const [isPending, startTransition] = useTransition();

    function today() {
        let today = DateTime.now();
        const taskDate = DateTime.fromJSDate(dueDate);

        if (taskDate.toFormat("yyyy-MM-dd") != today.toFormat("yyyy-MM-dd")) {
            today = today.toJSDate();
            startTransition(() => {
                setDueDate(taskId, today);
                updateTaskDueDate(taskId, today);
            });
        }
    }

    function tomorrow() {
        let tomorrow = DateTime.now().plus({ days: 1 });
        const taskDate = DateTime.fromJSDate(dueDate);

        if (taskDate.toFormat("yyyy-MM-dd") != tomorrow.toFormat("yyyy-MM-dd")) {
            tomorrow = tomorrow.toJSDate();
            startTransition(() => {
                setDueDate(taskId, tomorrow);
                updateTaskDueDate(taskId, tomorrow);
            });
        }
    }

    function none() {
        if (dueDate != null) {
            startTransition(() => {
                setDueDate(taskId, null);
                updateTaskDueDate(taskId, null);
            });
        }
    }

    return (
        <>
            <Button className="w-full" onClick={none} variant="ghost">
                Never
            </Button>
            <Button className="w-full" onClick={today} variant="ghost">
                Today
            </Button>
            <Button className="w-full" onClick={tomorrow} variant="ghost">
                Tomorrow
            </Button>

            <ManualUpdate taskId={taskId} dueDate={dueDate} />
        </>
    );
}
