"use client";

import { updateTaskName } from "@/actions/tasks";
import ToggleEditable from "@/components/ToggleEditable";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";
import { FiCheck } from "react-icons/fi";
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
            submitContent={<FiCheck />}
            displayClass={css.display}
            submitClass={css.submit}
            formClass={css.form}
        />
    );
}
