"use client";

import ToggleEditable from "@components/ToggleEditable";
import css from "./index.module.css";

export default function EditableName({ action, name, listId, taskId }) {
    return (
        <ToggleEditable
            action={() => action(name, listId, taskId)}
            initial={name}
            inputClass={css.input}
            submitContent="Update name"
            displayClass={css.display}
        />
    );
}
