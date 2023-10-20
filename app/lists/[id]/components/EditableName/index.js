"use client";

import ToggleEditable from "@components/ToggleEditable";
import css from "./index.module.css";

export default function EditableName({ action, name, listId }) {
    return (
        <ToggleEditable
            action={() => action(name, listId)}
            initial={name}
            submitContent="Update name"
            displayClass={css.display}
            inputClass={css.input}
        />
    );
}
