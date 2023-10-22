"use client";

import ToggleEditable from "@components/ToggleEditable";
import css from "./index.module.css";

export default function EditableName({ action, name, taskId }) {
    return (
        <ToggleEditable
            action={(input) => action(input, taskId)}
            initial={name}
            inputClass={css.input}
            submitContent="Update name"
            displayClass={css.display}
        />
    );
}
