"use client";

import { updateTaskNote } from "@/actions/tasks";
import ToggleEditable from "@/components/ToggleEditable";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";

export default function Note({ note, taskId }) {
    const { setNote } = useContext(TasksContext);

    return (
        <ToggleEditable
            action={(input) => {
                setNote(taskId, input);
                updateTaskNote(taskId, input);
            }}
            display={note}
            displayClass="text-left font-bold hover:text-gray-500"
            inputClass="leading-[inherit] w-full font-bold outline-0"
            defaultDisplay="(Empty note)"
            inputType="textarea"
            required={false}
        />
    );
}
