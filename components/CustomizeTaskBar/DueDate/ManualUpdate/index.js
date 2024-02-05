"use client";

import { updateTaskDueDate } from "@/actions/tasks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TasksContext from "@/providers/TasksContext";
import { DateTime } from "luxon";
import { useContext, useEffect, useRef } from "react";

export default function ManualUpdate({ taskId, dueDate }) {
    const { setDueDate } = useContext(TasksContext);
    const inputRef = useRef(null);

    useEffect(() => {
        if (dueDate !== null) inputRef.current.value = DateTime.fromJSDate(dueDate).toFormat("yyyy-MM-dd");
    }, [dueDate]);

    function handleAction(formData) {
        const dateInput = formData.get("dueDate");

        let newDate = DateTime.fromISO(dateInput);
        const taskDate = DateTime.fromJSDate(dueDate);

        if (taskDate.toFormat("yyyy-MM-dd") != newDate.toFormat("yyyy-MM-dd")) {
            newDate = newDate.toJSDate();
            setDueDate(taskId, newDate);
            updateTaskDueDate(taskId, newDate);
        }
    }

    return (
        <form className="p-1 flex flex-col gap-1 items-center" action={handleAction}>
            <Input
                ref={inputRef}
                className="hover:text-gray-500 cursor-pointer"
                type="date"
                defaultValue={DateTime.fromJSDate(dueDate).toFormat("yyyy-MM-dd")}
                name="dueDate"
            />
            <Button className="w-full font-bold" variant="ghost">
                Save
            </Button>
        </form>
    );
}
