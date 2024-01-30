"use client";

import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";
import { IoExitOutline } from "react-icons/io5";

export default function CloseButton() {
    const { setEditingTaskId } = useContext(TasksContext);

    return (
        <button onClick={() => setEditingTaskId(null)} className="text-4xl transition-colors hover:text-stone-400">
            <IoExitOutline />
        </button>
    );
}
