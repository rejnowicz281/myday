"use client";

import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";
import { IoExitOutline } from "react-icons/io5";
import css from "./index.module.css";

export default function CloseButton() {
    const { setEditingTaskId } = useContext(TasksContext);

    return (
        <button onClick={() => setEditingTaskId(null)} className={css.button}>
            <IoExitOutline />
        </button>
    );
}
