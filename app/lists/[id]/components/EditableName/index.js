"use client";

import { updateListName } from "@actions/lists";
import ToggleEditable from "@components/ToggleEditable";
import css from "./index.module.css";

export default function EditableName({ name, listId }) {
    return (
        <ToggleEditable
            action={(input) => updateListName(input, listId)}
            display={name}
            submitContent="Update name"
            displayClass={css.display}
            inputClass={css.input}
        />
    );
}
