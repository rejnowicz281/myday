"use client";

import { updateTaskDueDate } from "@/actions/tasks";
import DueDateDisplay from "@/components/tasks/DueDateDisplay";
import TasksContext from "@/providers/TasksContext";
import { DateTime } from "luxon";
import { useContext, useState, useTransition } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import ManualUpdate from "./ManualUpdate";

export default function DueDate({ dueDate, taskId }) {
    const [expanded, setExpanded] = useState(false);
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
        <div className="flex flex-col">
            <button
                className="hover:text-gray-500 font-bold flex items-center justify-center"
                onClick={() => setExpanded(!expanded)}
            >
                <DueDateDisplay dueDate={dueDate} />
                {expanded ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            {expanded && (
                <>
                    <button className="p-1 hover:text-gray-500" onClick={none}>
                        None
                    </button>
                    <button className="p-1 hover:text-gray-500" onClick={today}>
                        Today
                    </button>
                    <button className="p-1 hover:text-gray-500" onClick={tomorrow}>
                        Tomorrow
                    </button>
                    <div className="border-t border-b">
                        <ManualUpdate taskId={taskId} dueDate={dueDate} />
                    </div>
                </>
            )}
        </div>
    );
}
