"use client";

import { updateTaskName } from "@actions/tasks";
import TasksContext from "@app/lists/providers/TasksContext";
import ToggleEditable from "@components/ToggleEditable";
import { useContext } from "react";
import css from "./index.module.css";

export default function EditableName({ name, taskId }) {
    const { setName } = useContext(TasksContext);

    return (
        <ToggleEditable
            action={(input) => {
                setName(taskId, input);
                updateTaskName(taskId, input);
            }}
            display={name}
            inputClass={css.input}
            submitContent="Update name"
            displayClass={css.display}
        />
    );
}
