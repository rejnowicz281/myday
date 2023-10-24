"use client";

import { updateTaskNote } from "@actions/tasks";
import TasksContext from "@app/lists/providers/TasksContext";
import ToggleEditable from "@components/ToggleEditable";
import { useContext } from "react";
import css from "./index.module.css";

export default function Note({ note, taskId }) {
    const { setNote } = useContext(TasksContext);

    return (
        <ToggleEditable
            action={(input) => {
                setNote(taskId, input);
                updateTaskNote(taskId, input);
            }}
            display={note}
            inputClass={css.input}
            submitContent="Update note"
            displayClass={css.display}
            defaultDisplay="Note"
            inputType="textarea"
        />
    );
}
