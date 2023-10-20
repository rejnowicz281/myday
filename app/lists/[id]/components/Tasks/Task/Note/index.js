"use client";

import ToggleEditable from "@components/ToggleEditable";
import css from "./index.module.css";

export default function Note({ action, note, listId, taskId }) {
    return (
        <ToggleEditable
            action={() => action(note, listId, taskId)}
            initial={note}
            inputClass={css.input}
            submitContent="Update note"
            displayClass={css.display}
            defaultDisplay="Note"
            inputType="textarea"
        />
    );
}
