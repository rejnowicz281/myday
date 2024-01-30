"use client";

import { updateTaskName } from "@/actions/tasks";
import ToggleEditable from "@/components/ToggleEditable";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";

export default function EditableName({ name, taskId }) {
    const { setName } = useContext(TasksContext);

    return (
        <ToggleEditable
            action={(input) => {
                setName(taskId, input);
                updateTaskName(taskId, input);
            }}
            display={name}
            displayClass="text-[1.875rem] leading-[inherit] text-left font-bold hover:text-gray-500"
            inputClass="text-[1.875rem] leading-[inherit] w-full font-bold outline-0"
        />
    );
}
