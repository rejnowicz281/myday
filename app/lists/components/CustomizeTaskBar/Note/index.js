"use client";

import { updateTaskNote } from "@/actions/tasks";
import ToggleEditable from "@/components/ToggleEditable";
import TasksContext from "@/providers/TasksContext";
import { useContext } from "react";
import { FiCheck } from "react-icons/fi";
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
            submitContent={<FiCheck />}
            displayClass={css.display}
            defaultDisplay="(Empty note)"
            submitClass={css.submit}
            formClass={css.form}
            inputType="textarea"
        />
    );
}
