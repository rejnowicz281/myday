"use client";

import TasksContext from "@/providers/TasksContext";
import { IoExitOutline } from "@react-icons/all-files/io5/IoExitOutline";
import { useContext } from "react";

export default function CloseButton() {
    const { setEditingTaskId } = useContext(TasksContext);

    return (
        <button onClick={() => setEditingTaskId(null)} className="text-4xl transition-colors hover:text-stone-400">
            <IoExitOutline />
        </button>
    );
}
